// Complete 200 Rounds extracted from user's 20 BDG Game screenshots (Periods 10045 to 10244)
const SAMPLE_DATA = [
    // Page 20 (10045 - 10054)
    { period: "20261023100010045", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010046", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010047", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010048", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261023100010049", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010050", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010051", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010052", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261023100010053", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010054", number: 5, bigSmall: "Big", color: ["green", "violet"] },

    // Page 19 (10055 - 10064)
    { period: "20261023100010055", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261023100010056", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010057", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261023100010058", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261023100010059", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010060", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010061", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010062", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010063", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010064", number: 8, bigSmall: "Big", color: ["red"] },

    // Page 18 (10065 - 10074)
    { period: "20261023100010065", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261023100010066", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010067", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010068", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010069", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010070", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261023100010071", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010072", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010073", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010074", number: 3, bigSmall: "Small", color: ["green"] },

    // Page 17 (10075 - 10084)
    { period: "20261023100010075", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010076", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261023100010077", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261023100010078", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010079", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010080", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010081", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010082", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010083", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261023100010084", number: 2, bigSmall: "Small", color: ["red"] },

    // Page 16 (10085 - 10094)
    { period: "20261023100010085", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010086", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261023100010087", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261023100010088", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010089", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010090", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010091", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010092", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010093", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010094", number: 7, bigSmall: "Big", color: ["green"] },

    // Page 15 (10095 - 10104)
    { period: "20261023100010095", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010096", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010097", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010098", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010099", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261023100010100", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010101", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010102", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010103", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010104", number: 8, bigSmall: "Big", color: ["red"] },

    // Page 14 (10105 - 10114)
    { period: "20261023100010105", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010106", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261023100010107", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010108", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010109", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010110", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261023100010111", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261023100010112", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010113", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010114", number: 6, bigSmall: "Big", color: ["red"] },

    // Page 13 (10115 - 10124)
    { period: "20261023100010115", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010116", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010117", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010118", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010119", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010120", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010121", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261023100010122", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010123", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261023100010124", number: 8, bigSmall: "Big", color: ["red"] },

    // Page 12 (10125 - 10134)
    { period: "20261023100010125", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010126", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261023100010127", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010128", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010129", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010130", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010131", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261023100010132", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261023100010133", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010134", number: 3, bigSmall: "Small", color: ["green"] },

    // Page 11 (10135 - 10144)
    { period: "20261023100010135", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261023100010136", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010137", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010138", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261023100010139", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010140", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010141", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010142", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010143", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010144", number: 7, bigSmall: "Big", color: ["green"] },

    // Page 10 (10145 - 10154)
    { period: "20261023100010145", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010146", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010147", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010148", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010149", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261023100010150", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010151", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010152", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261023100010153", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261023100010154", number: 4, bigSmall: "Small", color: ["red"] },

    // Page 9 (10155 - 10164)
    { period: "20261023100010155", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010156", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010157", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261023100010158", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010159", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010160", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010161", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010162", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010163", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010164", number: 0, bigSmall: "Small", color: ["red", "violet"] },

    // Page 8 (10165 - 10174)
    { period: "20261023100010165", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010166", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010167", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010168", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261023100010169", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010170", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010171", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010172", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010173", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010174", number: 1, bigSmall: "Small", color: ["green"] },

    // Page 7 (10175 - 10184)
    { period: "20261023100010175", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010176", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010177", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010178", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010179", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010180", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010181", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010182", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010183", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010184", number: 6, bigSmall: "Big", color: ["red"] },

    // Page 6 (10185 - 10194)
    { period: "20261023100010185", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010186", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010187", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010188", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010189", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010190", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261023100010191", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261023100010192", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010193", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010194", number: 5, bigSmall: "Big", color: ["green", "violet"] },

    // Page 5 (10195 - 10204)
    { period: "20261023100010195", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010196", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010197", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010198", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010199", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010200", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010201", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010202", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010203", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261023100010204", number: 9, bigSmall: "Big", color: ["green"] },

    // Page 4 (10205 - 10214)
    { period: "20261023100010205", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010206", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010207", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261023100010208", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010209", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010210", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010211", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010212", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010213", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010214", number: 7, bigSmall: "Big", color: ["green"] },

    // Page 3 (10215 - 10224)
    { period: "20261023100010215", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261023100010216", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010217", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010218", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010219", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010220", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010221", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010222", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010223", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010224", number: 9, bigSmall: "Big", color: ["green"] },

    // Page 2 (10225 - 10234)
    { period: "20261023100010225", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010226", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261023100010227", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010228", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010229", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010230", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010231", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010232", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010233", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261023100010234", number: 2, bigSmall: "Small", color: ["red"] },

    // Page 1 (10235 - 10244)
    { period: "20261023100010235", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010236", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261023100010237", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010238", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010239", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261023100010240", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261023100010241", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010242", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261023100010243", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261023100010244", number: 2, bigSmall: "Small", color: ["red"] }
];

function getNumberAttributes(num) {
    num = parseInt(num, 10);
    const bigSmall = num >= 5 ? "Big" : "Small";
    let color = [];
    if (num === 0) {
        color = ["red", "violet"];
    } else if (num === 5) {
        color = ["green", "violet"];
    } else if ([1, 3, 7, 9].includes(num)) {
        color = ["green"];
    } else {
        color = ["red"];
    }
    return { number: num, bigSmall, color };
}
