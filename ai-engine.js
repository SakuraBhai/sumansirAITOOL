/**
 * BDG GAME AI PATTERN RECOGNITION & PREDICTION ENGINE
 * Combines 5 analytical models:
 * 1. Zigzag / Alternating Pattern Detector (1-1, 2-2, 3-3)
 * 2. Dragon / Streak Continuation vs Reversal Tracker
 * 3. 2nd-Order Markov Transition Matrix
 * 4. N-Gram Substring Historical Pattern Matcher
 * 5. Number Frequency & Parity/Color Matrix
 */

class AIPatternEngine {
    constructor() {
        this.weights = {
            zigzag: 0.30,
            streak: 0.25,
            markov: 0.25,
            ngram: 0.20
        };
    }

    /**
     * Run full AI analysis on history array (ordered chronological: index 0 = oldest, index N-1 = newest)
     * @param {Array} history 
     */
    predict(history) {
        if (!history || history.length < 3) {
            return {
                ready: false,
                message: "कम से कम 3 परिणाम दर्ज करें (Add at least 3 rounds for AI analysis)"
            };
        }

        const bigSmallList = history.map(item => item.bigSmall);
        const colorList = history.map(item => item.color[0]); // primary color
        const numberList = history.map(item => item.number);

        // 1. Zigzag Analysis
        const zigzagResult = this.detectZigZag(bigSmallList);

        // 2. Streak / Dragon Analysis
        const streakResult = this.detectStreak(bigSmallList);

        // 3. Markov Transition Probabilities
        const markovResult = this.markovAnalysis(bigSmallList);

        // 4. N-Gram Pattern Matcher
        const ngramResult = this.ngramMatch(bigSmallList, 3);

        // 5. Color Prediction
        const colorPrediction = this.predictColor(colorList, history);

        // 6. Number Prediction
        const numberPrediction = this.predictNumbers(numberList, history);

        // Ensemble Big/Small probabilities
        let bigScore = 0;
        let smallScore = 0;
        const reasons = [];

        // Combine Zigzag
        if (zigzagResult.active) {
            if (zigzagResult.suggested === "Big") bigScore += zigzagResult.confidence * this.weights.zigzag;
            else smallScore += zigzagResult.confidence * this.weights.zigzag;
            reasons.push(zigzagResult.reason);
        } else {
            bigScore += 0.5 * this.weights.zigzag;
            smallScore += 0.5 * this.weights.zigzag;
        }

        // Combine Streak
        if (streakResult.active) {
            if (streakResult.suggested === "Big") bigScore += streakResult.confidence * this.weights.streak;
            else smallScore += streakResult.confidence * this.weights.streak;
            reasons.push(streakResult.reason);
        } else {
            bigScore += 0.5 * this.weights.streak;
            smallScore += 0.5 * this.weights.streak;
        }

        // Combine Markov
        bigScore += markovResult.pBig * this.weights.markov;
        smallScore += markovResult.pSmall * this.weights.markov;
        reasons.push(markovResult.reason);

        // Combine N-Gram
        if (ngramResult.hasMatch) {
            bigScore += ngramResult.pBig * this.weights.ngram;
            smallScore += ngramResult.pSmall * this.weights.ngram;
            reasons.push(ngramResult.reason);
        } else {
            bigScore += 0.5 * this.weights.ngram;
            smallScore += 0.5 * this.weights.ngram;
        }

        // Normalize
        const total = bigScore + smallScore;
        const finalPBig = total > 0 ? (bigScore / total) : 0.5;
        const finalPSmall = total > 0 ? (smallScore / total) : 0.5;

        const primaryPrediction = finalPBig >= finalPSmall ? "Big" : "Small";
        const primaryConfidence = Math.round((primaryPrediction === "Big" ? finalPBig : finalPSmall) * 100);

        // Quality rating
        let confidenceRating = "Medium";
        if (primaryConfidence >= 75) confidenceRating = "Very High (अत्यधिक उच्च)";
        else if (primaryConfidence >= 65) confidenceRating = "High (उच्च)";
        else confidenceRating = "Moderate (संतुलित)";

        // Summary pattern name
        let detectedPattern = "Normal Distribution";
        if (zigzagResult.active) detectedPattern = zigzagResult.patternName;
        else if (streakResult.active && streakResult.length >= 3) detectedPattern = `Dragon Streak (${streakResult.length}x ${streakResult.current})`;

        return {
            ready: true,
            prediction: primaryPrediction,
            confidence: primaryConfidence,
            confidenceRating: confidenceRating,
            pBig: Math.round(finalPBig * 100),
            pSmall: Math.round(finalPSmall * 100),
            color: colorPrediction,
            numbers: numberPrediction,
            detectedPattern: detectedPattern,
            reasons: reasons,
            streakInfo: streakResult,
            stats: this.calculateStats(history)
        };
    }

    /**
     * Detect Alternating patterns: 1-1 (B-S-B-S), 2-2 (B-B-S-S), 1-2, 2-1
     */
    detectZigZag(list) {
        const len = list.length;
        if (len < 3) return { active: false };

        const last = list[len - 1];
        const prev1 = list[len - 2];
        const prev2 = list[len - 3];
        const prev3 = len >= 4 ? list[len - 4] : null;
        const prev4 = len >= 5 ? list[len - 5] : null;

        // 1-1 Zigzag: e.g. B - S - B - S - B -> Expect next to be S
        if (prev1 !== last && prev2 === last && (!prev3 || prev3 === prev1)) {
            let streakCount = 2;
            for (let i = len - 1; i >= 1; i--) {
                if (list[i] !== list[i - 1]) streakCount++;
                else break;
            }
            const expectedNext = last === "Big" ? "Small" : "Big";
            const confidence = Math.min(0.85, 0.60 + (streakCount * 0.05));
            return {
                active: true,
                patternName: `1-1 Zig-Zag (Alternating ${streakCount}x)`,
                suggested: expectedNext,
                confidence: confidence,
                reason: `⚡ 1-1 जिग-जैग (Alternating) पैटर्न सक्रिय (${streakCount} राउंड): अगला परिणाम '${expectedNext}' आने की प्रबल संभावना है।`
            };
        }

        // 2-2 Pattern: e.g. B, B, S, S, B, B -> Expect S
        if (len >= 4 && last === prev1 && prev2 === prev3 && last !== prev2) {
            const expectedNext = last; // might complete the second pair, or flip
            return {
                active: true,
                patternName: "2-2 Double Pair Pattern",
                suggested: last === "Big" ? "Small" : "Big",
                confidence: 0.70,
                reason: `👥 2-2 पेयर पैटर्न डिटेक्ट हुआ: दोनों जोड़े पूरे होने के बाद रिवर्सल की संभावना।`
            };
        }

        return { active: false };
    }

    /**
     * Streak / Dragon Tracker
     */
    detectStreak(list) {
        const len = list.length;
        if (len === 0) return { active: false };

        const last = list[len - 1];
        let streak = 1;
        for (let i = len - 2; i >= 0; i--) {
            if (list[i] === last) streak++;
            else break;
        }

        if (streak >= 3) {
            // Dragon pattern: in color games, streaks of 3-4 often continue up to 5-7,
            // but after 6+, reversal probability sharply increases.
            if (streak < 6) {
                // Continuation bias (Ride the Dragon)
                return {
                    active: true,
                    current: last,
                    length: streak,
                    suggested: last,
                    confidence: 0.68 + (streak * 0.02),
                    reason: `🐲 ड्रैगन ट्रेंड (Dragon Streak): '${last}' लगातार ${streak} बार आया है, ट्रेंड निरंतरता (Trend Continuation) का समर्थन करता है।`
                };
            } else {
                // Reversal bias (Overextended streak)
                const rev = last === "Big" ? "Small" : "Big";
                return {
                    active: true,
                    current: last,
                    length: streak,
                    suggested: rev,
                    confidence: 0.75,
                    reason: `⚠️ ड्रैगन ओवर-एक्सटेंडेड (${streak} बार '${last}'): मीन रिवर्जन के तहत अब '${rev}' की संभावना काफी बढ़ गई है।`
                };
            }
        }

        return {
            active: false,
            current: last,
            length: streak
        };
    }

    /**
     * 2nd order Markov Chain: P(Next | Last, Prev)
     */
    markovAnalysis(list) {
        const len = list.length;
        if (len < 4) {
            return { pBig: 0.5, pSmall: 0.5, reason: "मार्कोव चेन: डेटा पर्याप्त नहीं है।" };
        }

        const last = list[len - 1];
        const prev = list[len - 2];
        const state2 = `${prev}->${last}`;

        let countBig = 0;
        let countSmall = 0;

        // Traverse history to see what happened after state2
        for (let i = 0; i < len - 2; i++) {
            const histState = `${list[i]}->${list[i + 1]}`;
            if (histState === state2) {
                const nextVal = list[i + 2];
                if (nextVal === "Big") countBig++;
                else countSmall++;
            }
        }

        const totalTransitions = countBig + countSmall;
        if (totalTransitions >= 2) {
            const pBig = countBig / totalTransitions;
            const pSmall = countSmall / totalTransitions;
            return {
                pBig,
                pSmall,
                reason: `📊 2nd-Order Markov: '${state2}' के बाद इतिहास में ${countBig} बार Big और ${countSmall} बार Small आया है (${Math.round((pBig > pSmall ? pBig : pSmall) * 100)}% बायस)।`
            };
        }

        // Fallback to 1st order
        let countAfterLastBig = 0;
        let countAfterLastSmall = 0;
        for (let i = 0; i < len - 1; i++) {
            if (list[i] === last) {
                if (list[i + 1] === "Big") countAfterLastBig++;
                else countAfterLastSmall++;
            }
        }
        const total1 = countAfterLastBig + countAfterLastSmall;
        const pBig = total1 > 0 ? countAfterLastBig / total1 : 0.5;
        const pSmall = total1 > 0 ? countAfterLastSmall / total1 : 0.5;

        return {
            pBig,
            pSmall,
            reason: `📊 1st-Order Markov: '${last}' के बाद इतिहास में Big=${countAfterLastBig}, Small=${countAfterLastSmall} बार आया है।`
        };
    }

    /**
     * N-Gram Pattern Matcher: searches historical sequence of length N
     */
    ngramMatch(list, n = 3) {
        const len = list.length;
        if (len < n + 2) return { hasMatch: false };

        const query = list.slice(len - n).join(",");
        let followBig = 0;
        let followSmall = 0;

        for (let i = 0; i <= len - n - 1; i++) {
            const sub = list.slice(i, i + n).join(",");
            if (sub === query) {
                const next = list[i + n];
                if (next === "Big") followBig++;
                else followSmall++;
            }
        }

        const total = followBig + followSmall;
        if (total > 0) {
            return {
                hasMatch: true,
                pBig: followBig / total,
                pSmall: followSmall / total,
                matches: total,
                reason: `🔍 N-Gram मैच: क्रम [${query}] इतिहास में ${total} बार आया, जिसमें से ${followBig} बार Big और ${followSmall} बार Small आया।`
            };
        }

        return { hasMatch: false };
    }

    /**
     * Color Prediction: Red, Green, Violet
     */
    predictColor(colorList, history) {
        const len = colorList.length;
        if (len === 0) return { color: "red", confidence: 50 };

        const last = colorList[len - 1];
        let redCount = 0;
        let greenCount = 0;

        // Recent 15 rounds weighting
        const recent = history.slice(-15);
        recent.forEach((item, idx) => {
            const weight = (idx + 1); // recency weight
            if (item.color.includes("red")) redCount += weight;
            if (item.color.includes("green")) greenCount += weight;
        });

        // Alternating color check
        let isColorAlternating = false;
        if (len >= 3) {
            if (colorList[len - 1] !== colorList[len - 2] && colorList[len - 2] !== colorList[len - 3]) {
                isColorAlternating = true;
            }
        }

        let predictedColor = "red";
        let conf = 65;

        if (isColorAlternating) {
            predictedColor = last === "red" ? "green" : "red";
            conf = 72;
        } else if (redCount > greenCount) {
            // Mean reversal or momentum depending on streak
            predictedColor = "green";
            conf = 63;
        } else {
            predictedColor = "red";
            conf = 63;
        }

        // Violet chance (occurs at 0 and 5)
        const recentViolets = history.slice(-10).filter(h => h.number === 0 || h.number === 5).length;
        const violetChance = recentViolets === 0 ? "High (संभावित 0 या 5)" : "Normal";

        return {
            predicted: predictedColor,
            confidence: conf,
            violetChance: violetChance
        };
    }

    /**
     * Predict top 3 numbers based on hot/cold frequency and Big/Small prediction
     */
    predictNumbers(numberList, history) {
        const counts = Array(10).fill(0);
        // Weight recent occurrences
        const recent = numberList.slice(-25);
        recent.forEach((num, idx) => {
            counts[num] += (idx + 1);
        });

        // Score numbers
        const lastPredictionIsBig = history[history.length - 1].bigSmall === "Small"; // if alternating, prefer Big
        const scored = [];
        for (let num = 0; num <= 9; num++) {
            let score = counts[num];
            // If big predicted, give boost to 5-9
            if (lastPredictionIsBig && num >= 5) score *= 1.35;
            if (!lastPredictionIsBig && num < 5) score *= 1.35;
            scored.push({ number: num, score });
        }

        scored.sort((a, b) => b.score - a.score);
        return scored.slice(0, 3).map(s => s.number);
    }

    /**
     * Summary stats of history
     */
    calculateStats(history) {
        const total = history.length;
        const bigs = history.filter(h => h.bigSmall === "Big").length;
        const smalls = history.filter(h => h.bigSmall === "Small").length;
        const reds = history.filter(h => h.color.includes("red")).length;
        const greens = history.filter(h => h.color.includes("green")).length;
        const violets = history.filter(h => h.color.includes("violet")).length;

        // Number counts
        const numCounts = Array(10).fill(0);
        history.forEach(h => numCounts[h.number]++);

        return {
            total,
            bigs,
            smalls,
            bigPercent: total ? Math.round((bigs / total) * 100) : 50,
            smallPercent: total ? Math.round((smalls / total) * 100) : 50,
            reds,
            greens,
            violets,
            numCounts
        };
    }
}

// Global instance
window.AIPatternEngine = AIPatternEngine;
