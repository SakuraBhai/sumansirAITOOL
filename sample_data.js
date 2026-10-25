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
    { period: "20261023100010244", number: 2, bigSmall: "Small", color: ["red"] },

    // === NEW SCREENSHOT DATASET (Oct 24 Night 11357-11440 & Oct 25 Morning 10001-10274) ===
    // Page 36/50 (11357 - 11366)
    { period: "20261024100011357", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261024100011358", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261024100011359", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261024100011360", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261024100011361", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261024100011362", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261024100011363", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261024100011364", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261024100011365", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261024100011366", number: 1, bigSmall: "Small", color: ["green"] },

    // Page 35/50 (11367 - 11375)
    { period: "20261024100011367", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261024100011368", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261024100011369", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261024100011370", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261024100011371", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261024100011372", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261024100011373", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261024100011374", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261024100011375", number: 7, bigSmall: "Big", color: ["green"] },

    // Page 34/50 (11376 - 11385)
    { period: "20261024100011376", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261024100011377", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261024100011378", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261024100011379", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261024100011380", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261024100011381", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261024100011382", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261024100011383", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261024100011384", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261024100011385", number: 6, bigSmall: "Big", color: ["red"] },

    // Page 33/50 (11386 - 11395)
    { period: "20261024100011386", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261024100011387", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261024100011388", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261024100011389", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261024100011390", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261024100011391", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261024100011392", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261024100011393", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261024100011394", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261024100011395", number: 4, bigSmall: "Small", color: ["red"] },

    // Page 32/50 (11396 - 11405)
    { period: "20261024100011396", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261024100011397", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261024100011398", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261024100011399", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261024100011400", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261024100011401", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261024100011402", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261024100011403", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261024100011404", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261024100011405", number: 8, bigSmall: "Big", color: ["red"] },

    // Page 31/50 (11406 - 11415)
    { period: "20261024100011406", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261024100011407", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261024100011408", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261024100011409", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261024100011410", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261024100011411", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261024100011412", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261024100011413", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261024100011414", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261024100011415", number: 9, bigSmall: "Big", color: ["green"] },

    // Page 30/50 (11416 - 11425)
    { period: "20261024100011416", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261024100011417", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261024100011418", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261024100011419", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261024100011420", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261024100011421", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261024100011422", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261024100011423", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261024100011424", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261024100011425", number: 4, bigSmall: "Small", color: ["red"] },

    // Page 29/50 (11426 - 11435)
    { period: "20261024100011426", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261024100011427", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261024100011428", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261024100011429", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261024100011430", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261024100011431", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261024100011432", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261024100011433", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261024100011434", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261024100011435", number: 6, bigSmall: "Big", color: ["red"] },

    // Page 28/50 (11436 - 11440 & 10001 - 10005)
    { period: "20261024100011436", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261024100011437", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261024100011438", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261024100011439", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261024100011440", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010001", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010002", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261025100010003", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261025100010004", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010005", number: 0, bigSmall: "Small", color: ["red", "violet"] },

    // Page 27/50 (10006 - 10015)
    { period: "20261025100010006", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010007", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010008", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010009", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010010", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010011", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010012", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010013", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261025100010014", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010015", number: 0, bigSmall: "Small", color: ["red", "violet"] },

    // Page 26/50 (10016 - 10025)
    { period: "20261025100010016", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010017", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010018", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010019", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010020", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010021", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010022", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010023", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010024", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010025", number: 6, bigSmall: "Big", color: ["red"] },

    // Page 25/50 (10026 - 10035)
    { period: "20261025100010026", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010027", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261025100010028", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010029", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010030", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010031", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010032", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010033", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010034", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010035", number: 9, bigSmall: "Big", color: ["green"] },

    // Page 23/50 (10046 - 10055)
    { period: "20261025100010046", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010047", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010048", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010049", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261025100010050", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010051", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010052", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010053", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010054", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010055", number: 1, bigSmall: "Small", color: ["green"] },

    // Page 22/50 (10056 - 10065)
    { period: "20261025100010056", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010057", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010058", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010059", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010060", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010061", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261025100010062", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010063", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010064", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010065", number: 0, bigSmall: "Small", color: ["red", "violet"] },

    // Page 21/50 (10066 - 10075)
    { period: "20261025100010066", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010067", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010068", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010069", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010070", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010071", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010072", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010073", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010074", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261025100010075", number: 3, bigSmall: "Small", color: ["green"] },

    // Page 20/50 (10076 - 10085)
    { period: "20261025100010076", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010077", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010078", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010079", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010080", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010081", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010082", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010083", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010084", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010085", number: 3, bigSmall: "Small", color: ["green"] },

    // Page 19/50 (10086 - 10095)
    { period: "20261025100010086", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010087", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010088", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261025100010089", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010090", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010091", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010092", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010093", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010094", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010095", number: 9, bigSmall: "Big", color: ["green"] },

    // Page 18/50 (10096 - 10105)
    { period: "20261025100010096", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010097", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261025100010098", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010099", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010100", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010101", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010102", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010103", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010104", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010105", number: 5, bigSmall: "Big", color: ["green", "violet"] },

    // Page 17/50 (10106 - 10115)
    { period: "20261025100010106", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010107", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261025100010108", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010109", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010110", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010111", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010112", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010113", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010114", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010115", number: 5, bigSmall: "Big", color: ["green", "violet"] },

    // Page 16/50 (10116 - 10125)
    { period: "20261025100010116", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010117", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261025100010118", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010119", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010120", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010121", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010122", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010123", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010124", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261025100010125", number: 2, bigSmall: "Small", color: ["red"] },

    // Page 15/50 (10126 - 10135)
    { period: "20261025100010126", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010127", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010128", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010129", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010130", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010131", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010132", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010133", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010134", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010135", number: 8, bigSmall: "Big", color: ["red"] },

    // Page 14/50 (10136 - 10145)
    { period: "20261025100010136", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010137", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010138", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261025100010139", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010140", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010141", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010142", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010143", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010144", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010145", number: 5, bigSmall: "Big", color: ["green", "violet"] },

    // Page 13/50 (10146 - 10155)
    { period: "20261025100010146", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010147", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010148", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010149", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010150", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010151", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010152", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010153", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010154", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010155", number: 6, bigSmall: "Big", color: ["red"] },

    // Page 12/50 (10156 - 10165)
    { period: "20261025100010156", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261025100010157", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010158", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010159", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010160", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010161", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010162", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261025100010163", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010164", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010165", number: 2, bigSmall: "Small", color: ["red"] },

    // Page 11/50 (10166 - 10175)
    { period: "20261025100010166", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010167", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010168", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010169", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010170", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010171", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010172", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010173", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010174", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010175", number: 9, bigSmall: "Big", color: ["green"] },

    // Page 10/50 (10176 - 10185)
    { period: "20261025100010176", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010177", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010178", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010179", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010180", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010181", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010182", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010183", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010184", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010185", number: 5, bigSmall: "Big", color: ["green", "violet"] },

    // Page 9/50 (10186 - 10195)
    { period: "20261025100010186", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010187", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261025100010188", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010189", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010190", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261025100010191", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010192", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010193", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010194", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010195", number: 7, bigSmall: "Big", color: ["green"] },

    // Page 8/50 (10196 - 10205)
    { period: "20261025100010196", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010197", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010198", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010199", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010200", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010201", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010202", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010203", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010204", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010205", number: 3, bigSmall: "Small", color: ["green"] },

    // Page 7/50 (10206 - 10215)
    { period: "20261025100010206", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010207", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010208", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010209", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010210", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010211", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010212", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261025100010213", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010214", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010215", number: 6, bigSmall: "Big", color: ["red"] },

    // Page 6/50 (10216 - 10224)
    { period: "20261025100010216", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010217", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010218", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010219", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010220", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010221", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010222", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010223", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010224", number: 7, bigSmall: "Big", color: ["green"] },

    // Page 5/50 (10225 - 10234)
    { period: "20261025100010225", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010226", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010227", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010228", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010229", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261025100010230", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010231", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010232", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010233", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010234", number: 7, bigSmall: "Big", color: ["green"] },

    // Page 4/50 (10235 - 10244)
    { period: "20261025100010235", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010236", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010237", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010238", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010239", number: 5, bigSmall: "Big", color: ["green", "violet"] },
    { period: "20261025100010240", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010241", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010242", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010243", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261025100010244", number: 6, bigSmall: "Big", color: ["red"] },

    // Page 3/50 (10245 - 10254)
    { period: "20261025100010245", number: 7, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010246", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010247", number: 0, bigSmall: "Small", color: ["red", "violet"] },
    { period: "20261025100010248", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010249", number: 3, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010250", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010251", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010252", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010253", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010254", number: 9, bigSmall: "Big", color: ["green"] },

    // Page 2/50 (10255 - 10264)
    { period: "20261025100010255", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010256", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010257", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010258", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010259", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010260", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010261", number: 1, bigSmall: "Small", color: ["green"] },
    { period: "20261025100010262", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010263", number: 2, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010264", number: 5, bigSmall: "Big", color: ["green", "violet"] },

    // Page 1/50 (10265 - 10274)
    { period: "20261025100010265", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010266", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010267", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010268", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010269", number: 6, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010270", number: 8, bigSmall: "Big", color: ["red"] },
    { period: "20261025100010271", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010272", number: 4, bigSmall: "Small", color: ["red"] },
    { period: "20261025100010273", number: 9, bigSmall: "Big", color: ["green"] },
    { period: "20261025100010274", number: 8, bigSmall: "Big", color: ["red"] }
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

if (typeof window !== "undefined") {
    window.SAMPLE_DATA = SAMPLE_DATA;
}
if (typeof module !== "undefined" && module.exports) {
    module.exports = { SAMPLE_DATA };
}
