import React from 'react';
import { Accordion, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './LanguagePlatform.css';

const LanguagePlatform = () => {
    const navigate = useNavigate();

    const worldLanguages = [
        { name: "Russian Translations", flag: "🇷🇺" },
        { name: "Arabic Translations", flag: "🇸🇦" },
        { name: "Bengali Translations", flag: "🇧🇩" },
        { name: "Chinese Translations", flag: "🇨🇳" },
        { name: "English Translations", flag: "🇬🇧" },
        { name: "Hindi Translations", flag: "🇮🇳" },
        { name: "Japanese Translations", flag: "🇯🇵" },
        { name: "Portuguese Translations", flag: "🇵🇹" },
        { name: "Spanish Translations", flag: "🇪🇸" },
        { name: "Punjabi Translations", flag: "🇮🇳" }
    ];

    const indianLanguages = [
        { name: "Assamese Translation", flag: "🇮🇳" },
        { name: "Bengali Translation", flag: "🇮🇳" },
        { name: "Bodo Translation", flag: "🇮🇳" },
        { name: "Bhojpuri Translation", flag: "🇮🇳" },
        { name: "Dogri Translation", flag: "🇮🇳" },
        { name: "Gujarati Translation", flag: "🇮🇳" },
        { name: "Hindi Translation", flag: "🇮🇳" },
        { name: "Kannada Translation", flag: "🇮🇳" },
        { name: "Kashmiri Translation", flag: "🇮🇳" },
        { name: "Konkani Translation", flag: "🇮🇳" },
        { name: "Maithili Translation", flag: "🇮🇳" },
        { name: "Malayalam Translation", flag: "🇮🇳" },
        { name: "Modi Script Translation", flag: "🇮🇳" },
        { name: "Manipuri Translation", flag: "🇮🇳" },
        { name: "Marathi Translation", flag: "🇮🇳" },
        { name: "Mizo Translation", flag: "🇮🇳" },
        { name: "Nepali Translation", flag: "🇮🇳" },
        { name: "Oriya Translation", flag: "🇮🇳" },
        { name: "Punjabi Translation", flag: "🇮🇳" },
        { name: "Sanskrit Translation", flag: "🇮🇳" },
        { name: "Santali Translation", flag: "🇮🇳" },
        { name: "Tamil Translation", flag: "🇮🇳" },
        { name: "Telugu Translation", flag: "🇮🇳" },
        { name: "Urdu Translation", flag: "🇮🇳" }
    ];

    const europeanLanguages = [
        { name: "Albanian Translation", flag: "🇦🇱" },
        { name: "Bulgarian Translation", flag: "🇧🇬" },
        { name: "Croatian Translation", flag: "🇭🇷" },
        { name: "Czech Translation", flag: "🇨🇿" },
        { name: "Dutch Translation", flag: "🇳🇱" },
        { name: "Danish Translation", flag: "🇩🇰" },
        { name: "English Translation", flag: "🇬🇧" },
        { name: "Finnish Translation", flag: "🇫🇮" },
        { name: "French Translation", flag: "🇫🇷" },
        { name: "German Translation", flag: "🇩🇪" },
        { name: "Greek Translation", flag: "🇬🇷" },
        { name: "Hungarian Translation", flag: "🇭🇺" },
        { name: "Irish Translation", flag: "🇮🇪" },
        { name: "Italian Translation", flag: "🇮🇹" },
        { name: "Latvian Translation", flag: "🇱🇻" },
        { name: "Lithuanian Translation", flag: "🇱🇹" },
        { name: "Maltese Translation", flag: "🇲🇹" },
        { name: "Macedonian Translation", flag: "🇲🇰" },
        { name: "Polish Translation", flag: "🇵🇱" },
        { name: "Portuguese Translation", flag: "🇵🇹" },
        { name: "Romanian Translation", flag: "🇷🇴" },
        { name: "Russian Translation", flag: "🇷🇺" },
        { name: "Romansh Translation", flag: "🇨🇭" },
        { name: "Serbian Translation", flag: "🇷🇸" },
        { name: "Slovak Translation", flag: "🇸🇰" },
        { name: "Slovene Translation", flag: "🇸🇮" },
        { name: "Spanish Translation", flag: "🇪🇸" },
        { name: "Swedish Translation", flag: "🇸🇪" },
        { name: "Turkish Translation", flag: "🇹🇷" }
    ];


    const asianLanguages = [
        { name: "Standard Chinese Translation", flag: "🇨🇳" },
        { name: "Mandarin Chinese Translation", flag: "🇨🇳" },
        { name: "Japanese Translation", flag: "🇯🇵" },
        { name: "Armenian Translation", flag: "🇦🇲" },
        { name: "Azerbaijani Translation", flag: "🇦🇿" },
        { name: "Baluchi Translation", flag: "🇵🇰" },
        { name: "Korean Translation", flag: "🇰🇷" },
        { name: "Greek Translation", flag: "🇬🇷" },
        { name: "Turkish Translation", flag: "🇹🇷" },
        { name: "Egyptian Arabic Translation", flag: "🇪🇬" },
        { name: "Georgian Translation", flag: "🇬🇪" },
        { name: "Persian Translation", flag: "🇮🇷" },
        { name: "Kurdish Arabic Translation", flag: "🇮🇶" },
        { name: "Hebrew Translation", flag: "🇮🇱" },
        { name: "Kazakh Russian Translation", flag: "🇰🇿" },
        { name: "Kyrgyz Translation", flag: "🇰🇬" },
        { name: "Turkmen Translation", flag: "🇹🇲" },
        { name: "Mongolian Translation", flag: "🇲🇳" },
        { name: "Bengali Translation", flag: "🇧🇩" },
        { name: "Dzongkha Translation", flag: "🇧🇹" },
        { name: "Hindi Translation", flag: "🇮🇳" },
        { name: "English Translation", flag: "🇬🇧" },
        { name: "Maldivian Translation", flag: "🇲🇻" },
        { name: "Nepali Translation", flag: "🇳🇵" },
        { name: "Urdu Translation", flag: "🇵🇰" },
        { name: "Sinhala Tamil Translation", flag: "🇱🇰" },
        { name: "Bahasa Melayu Translation", flag: "🇲🇾" },
        { name: "Khmer Translation", flag: "🇰🇭" },
        { name: "Portuguese Tetum Translation", flag: "🇹🇱" },
        { name: "Indonesian Translation", flag: "🇮🇩" },
        { name: "Burmese Translation", flag: "🇲🇲" },
        { name: "Filipino English Translation", flag: "🇵🇭" },
        { name: "Malay Translation", flag: "🇲🇾" },
        { name: "Chinese Translation", flag: "🇨🇳" },
        { name: "Tamil Translation", flag: "🇮🇳" },
        { name: "Vietnamese Translation", flag: "🇻🇳" },
        { name: "Thai Translation", flag: "🇹🇭" },
        { name: "Tibetan Translation", flag: "🇨🇳" }
    ];

    const americanLanguages = [
        { name: "English Translation", flag: "🇺🇸" },
        { name: "Spanish Translation", flag: "🇲🇽" },
        { name: "Chinese Translation", flag: "🇺🇸" },
        { name: "French Translation", flag: "🇨🇦" },
        { name: "Tagalog Translation", flag: "🇵🇭" },
        { name: "Vietnamese Translation", flag: "🇻🇳" },
        { name: "Korean Translation", flag: "🇰🇷" },
        { name: "German Translation", flag: "🇩🇪" },
        { name: "Russian Translation", flag: "🇷🇺" },
        { name: "Portuguese Translation", flag: "🇧🇷" }
    ];

    const easternEuropeanLanguages = [
        { name: "Armenian Translation", flag: "🇦🇲" },
        { name: "Albanian Translation", flag: "🇦🇱" },
        { name: "Azeri Translation", flag: "🇦🇿" },
        { name: "Bulgarian Translation", flag: "🇧🇬" },
        { name: "Croatian Translation", flag: "🇭🇷" },
        { name: "Serbian Translation", flag: "🇷🇸" },
        { name: "Czech Translation", flag: "🇨🇿" },
        { name: "Georgian Translation", flag: "🇬🇪" },
        { name: "Hungarian Translation", flag: "🇭🇺" },
        { name: "Kazakh Translation", flag: "🇰🇿" },
        { name: "Latvian Translation", flag: "🇱🇻" },
        { name: "Lithuanian Translation", flag: "🇱🇹" },
        { name: "Macedonian Translation", flag: "🇲🇰" },
        { name: "Bosnian Translation", flag: "🇧🇦" },
        { name: "Polish Translation", flag: "🇵🇱" },
        { name: "Romanian Translation", flag: "🇷🇴" },
        { name: "Russian Translation", flag: "🇷🇺" },
        { name: "Slovak Translation", flag: "🇸🇰" },
        { name: "Slovene Translation", flag: "🇸🇮" },
        { name: "Ukrainian Translation", flag: "🇺🇦" },
        { name: "Uzbek Translation", flag: "🇺🇿" }
    ];

    const africanLanguages = [
        { name: "Arabic Translation", flag: "🇪🇬" },
        { name: "Somali Translation", flag: "🇸🇴" },
        { name: "Afrikaans Translation", flag: "🇿🇦" },
        { name: "Swahili Translation", flag: "🇰🇪" },
        { name: "Siswati Translation", flag: "🇸🇿" },
        { name: "Xhosa Translation", flag: "🇿🇦" },
        { name: "Zulu Translation", flag: "🇿🇦" }
    ];


    const continents = [
        { title: "Indian Languages", languages: indianLanguages },
        { title: "European Languages", languages: europeanLanguages },
        { title: "Eastern European Languages", languages: easternEuropeanLanguages },
        { title: "Asian Languages", languages: asianLanguages },
        { title: "American Languages", languages: americanLanguages },
        { title: "African Languages", languages: africanLanguages }
    ];

    const descriptions = {
        top10: "These are the most spoken languages across the globe, connecting billions of people in business, culture, and communication. Their influence spans continents and centuries, evolving through trade, migration, and digital expansion.",
        IndianLanguages: "India’s linguistic diversity is one of its most remarkable cultural features. With over 22 officially recognized languages and hundreds of dialects, it showcases a rich heritage deeply rooted in tradition and regional identity.",
        EuropeanLanguages: "European languages like Spanish, French, and Portuguese have played a major role in global communication due to colonization, diplomacy, and cultural exports such as literature, cinema, and art.",
        EasternEuropeanLanguages: "Languages from Eastern Europe such as Russian, Polish, and Ukrainian reflect a blend of Slavic roots and historical influences from both Asia and Western Europe. These languages are known for their rich phonetics and literature.",
        AsianLanguages: "Asia is home to some of the oldest and most widely spoken languages in the world, including Chinese, Hindi, and Japanese. These languages carry deep philosophical, literary, and spiritual traditions across massive populations.",
        AmericanLanguages: "Languages in the Americas are shaped by native roots and colonial pasts. While English and Spanish dominate, many indigenous languages still persist, reflecting the continent’s cultural mosaic.",
        AfricanLanguages: "Africa is linguistically the most diverse continent, with over 2,000 languages. From Swahili to Amharic, African languages are central to oral storytelling, tradition, and identity."
    };

    const serviceUrlMap = {
        // Indian Languages Sub-Items
        "assamese": "Assamese",
        "bengali": "Bengali",
        "bodo": "Bodo",
        "bhojpuri": "Bhojpuri",
        "dogri": "Dogri",
        "gujarati": "Gujarati",
        "hindi": "Hindi",
        "kannada": "Kannada",
        "kashmiri": "Kashmiri",
        "konkani": "Konkani",
        "maithili": "Maithili",
        "malayalam": "Malayalam",
        "modi-script": "Modi Script",
        "manipuri": "Manipuri",
        "marathi": "Marathi",
        "mizo": "Mizo",
        "nepali": "Nepali",
        "oriya": "Oriya",
        "punjabi": "Punjabi",
        "sanskrit": "Sanskrit",
        "santali": "Santali",
        "tamil": "Tamil",
        "telugu": "Telugu",
        "urdu": "Urdu",


        // European Languages Sub-Items
        "albanian": "Albanian",
        "bulgarian": "Bulgarian",
        "croatian": "Croatian",
        "czech": "Czech",
        "dutch": "Dutch",
        "danish": "Danish",
        "english": "English",
        "finnish": "Finnish",
        "french": "French",
        "german": "German",
        "greek": "Greek",
        "hungarian": "Hungarian",
        "irish": "Irish",
        "italian": "Italian",
        "latvian": "Latvian",
        "lithuanian": "Lithuanian",
        "maltese": "Maltese",
        "macedonian": "Macedonian",
        "polish": "Polish",
        "portuguese": "Portuguese",
        "romanian": "Romanian",
        "russian": "Russian",
        "romansh": "Romansh (Rhaeto-Romanic)",
        "serbian": "Serbian",
        "slovak": "Slovak",
        "slovene": "Slovene",
        "spanish": "Spanish",
        "swedish": "Swedish",
        "turkish": "Turkish",


        // Asian Languages Sub-Items
        "standard-chinese": "Standard Chinese",
        "mandarin-chinese": "Mandarin Chinese",
        "japanese": "Japanese",
        "armenian": "Armenian",
        "azerbaijani": "Azerbaijani",
        // "arabic": "Arabic",
        "baluchi": "Baluchi",
        "korean": "Korean",
        "greek": "Greek",
        "turkish": "Turkish",
        "egyptian-arabic": "Egyptian Arabic",
        "georgian": "Georgian",
        "persian": "Persian",
        "kurdish-arabic": "Kurdish Arabic",
        "hebrew": "Hebrew",
        "kazakh-russian": "Kazakh Russian",
        "kyrgyz": "Kyrgyz",
        "turkmen": "Turkmen",
        "mongolian": "Mongolian",
        "bengali": "Bengali",
        "dzongkha": "Dzongkha",
        "hindi": "Hindi",
        "english": "English",
        "maldivian": "Maldivian",
        "nepali": "Nepali",
        "urdu": "Urdu",
        "sinhala-tamil": "Sinhala Tamil",
        "bahasa-melayu": "Bahasa Melayu",
        "khmer": "Khmer",
        "portuguese-tetum": "Portuguese Tetum",
        "indonesian": "Indonesian",
        "burmese": "Burmese",
        "filipino-english": "Filipino English",
        "malay": "Malay",
        "chinese": "Chinese",
        "tamil": "Tamil",
        "vietnamese": "Vietnamese",
        "thai": "Thai",
        "tibetan": "Tibetan",


        // American Languages Sub-Items
        "english": "English",
        "spanish": "Spanish",
        "chinese": "Chinese",
        "french": "French",
        "tagalog": "Tagalog",
        "vietnamese": "Vietnamese",
        "korean": "Korean",
        "german": "German",
        // "arabic": "Arabic",
        "russian": "Russian",
        "portuguese": "Portuguese",

        // Middle East European Languages Sub-Items
        "armenian": "Armenian",
        "albanian": "Albanian",
        "azeri": "Azeri",
        "bulgarian": "Bulgarian",
        "croatian": "Croatian",
        "serbian": "Serbian",
        "czech": "Czech",
        "georgian": "Georgian",
        "hungarian": "Hungarian",
        "kazakh": "Kazakh",
        "latvian": "Latvian",
        "lithuanian": "Lithuanian",
        "macedonian": "Macedonian",
        "bosnian": "Bosnian",
        "polish": "Polish",
        "romanian": "Romanian",
        "russian": "Russian",
        "slovak": "Slovak",
        "slovene": "Slovene",
        "ukrainian": "Ukrainian",
        "uzbek": "Uzbek",


        //African Languages Sub-Items
        "arabic": "Arabic",
        "somali": "Somali",
        "afrikaans": "Afrikaans",
        "swahili": "Swahili",
        "siswati": "Siswati",
        "xhosa": "Xhosa",
        "zulu": "Zulu"
    };

    const getLanguageKey = (languageName) => {
        // Remove " Translation" from the end of the name
        let baseName = languageName.replace(' Translation', '').toLowerCase();

        // Handle special cases first
        const specialCases = {
            "standard chinese": "standard-chinese",
            "mandarin chinese": "mandarin-chinese",
            "filipino english": "filipino-english",
            "sinhala tamil": "sinhala-tamil",
            "portuguese tetum": "portuguese-tetum",
            "kurdish arabic": "kurdish-arabic",
            "kazakh russian": "kazakh-russian",
            "egyptian arabic": "egyptian-arabic",
            "bahasa melayu": "bahasa-melayu",
            "modi script": "modi-script"
        };

        if (specialCases[baseName]) {
            return specialCases[baseName];
        }

        // Remove trailing 's' if present (for plurals)
        if (baseName.endsWith('s') && !serviceUrlMap[baseName]) {
            baseName = baseName.slice(0, -1);
        }

        // Replace spaces with hyphens
        return baseName.replace(/\s+/g, '-');
    };

    // Function to handle language click
    const handleLanguageClick = (languageName) => {
        const key = getLanguageKey(languageName);
        navigate(`/langauges/${key}`);
    };


    const getReadMorePath = (title) => {
        switch (title) {
            case 'Indian Languages':
                return '/langauges/indian-languages';
            case 'European Languages':
                return '/langauges/european-languages';
            case 'Eastern European Languages':
                return '/langauges/eastern-european-languages';
            case 'Asian Languages':
                return '/langauges/asian-languages';
            case 'American Languages':
                return '/langauges/american-languages';
            case 'African Languages':
                return '/langauges/african-languages';
            default:
                return '/langauges';
        }
    };

    return (
        <Container className="mt-5 py-5">
            <div className="text-center text-uppercase fw-bold" style={{ fontSize: "22px", color: "#F5454E" }}>
                Languages
            </div>
            <div className="text-center fw-bold" style={{ fontSize: "30px" }}>Languages Platform</div>

            <Row className="mt-5">
                {/* Left Card - Top 10 Languages */}
                <Col lg={6} className="mb-2">
                    <Card className="h-100 shadow">
                        <Card.Header className="custom-hover-red d-flex align-items-center py-3" style={{ backgroundColor: "#F5454E", color: "#fff" }}>
                            <span style={{ fontSize: 24, marginRight: 10 }}>🌍</span>
                            <span className="fw-bold">Top 10 Languages in the World</span>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1" style={{ fontSize: "14px" }}>
                                {descriptions.top10}
                            </p>
                            <a className="text-decoration-none" style={{ color: "#F5454E", fontSize: "14px", cursor: "pointer" }} onClick={() => navigate("/langauges")}>.....Read More</a>
                            <Row className="mt-3">
                                {worldLanguages.map((lang, index) => (
                                    <Col xs={6} sm={4} key={index} className="mb-3">
                                        <div onClick={() => handleLanguageClick(lang.name)} className="language-tag d-flex align-items-center px-2 py-1 rounded shadow-sm">
                                            <span style={{ fontSize: "16px", marginRight: "6px" }}>{lang.flag}</span>
                                            <span style={{ fontSize: "12px", color: "#000" }}>{lang.name}</span>
                                        </div>

                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Right Accordions - Language Groups */}
                <Col lg={6}>
                    <Accordion className="h-100 py-0">
                        {continents.map((continent, index) => (
                            <Accordion.Item className="mb-2 shadow" eventKey={index.toString()} key={continent.title}>
                                <Accordion.Header>
                                    <span style={{ fontSize: 24, marginRight: 10 }}>{continent.languages[0]?.flag}</span>
                                    <span className="fw-bold">{continent.title}</span>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className="mb-2" style={{ fontSize: "14px" }}>
                                        {descriptions[continent.title.replace(/\s/g, '')] || descriptions.top10}
                                    </p>
                                    <a
                                        className="text-decoration-none"
                                        style={{ color: "#F5454E", fontSize: "14px", cursor: "pointer" }}
                                        onClick={() => navigate(getReadMorePath(continent.title))}
                                    >
                                        .....Read More
                                    </a>
                                    <Row className="mt-4">
                                        {continent.languages.map((lang, idx) => (
                                            <Col xs={6} sm={4} key={idx} className="mb-3">
                                                <div onClick={() => handleLanguageClick(lang.name)} className="language-tag d-flex align-items-center px-2 py-1 rounded shadow-sm" >
                                                    <span style={{ fontSize: "16px", marginRight: "6px" }}>{lang.flag}</span>
                                                    <span style={{ fontSize: "12px", color: "#000" }}>{lang.name}</span>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default LanguagePlatform;
