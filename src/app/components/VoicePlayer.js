import React, { useState, useRef } from 'react';
import { Container, Row, Col, ListGroup, Card, Alert } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import 'react-h5-audio-player/lib/styles.css';
import "./Voiceplayer.css"


const VoicePlayer = () => {
    // Sample voice data with actual audio imports
    const voiceCategories = {
        Hindi: {
            'G S Male': [
                { name: 'Voice 1', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
                { name: 'Voice 2', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' }
            ],
            'H C Male': [
                { name: 'Voice 3', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
                { name: 'Voice 4', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' }
            ],
            'K T Male': [
                { name: 'Voice 5', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' }
            ]
        },
        English: {
            Male: [
                { name: 'English Male 1', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' }
            ],
            Female: [
                { name: 'English Female 1', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' }
            ],
            Kids: [
                { name: 'English Kid 1', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' }
            ]
        },
        French: {
            Male: [
                { name: 'French Male 1', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3' }
            ],
            Female: [
                { name: 'French Female 1', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3' }
            ]
        },
        Chinese: {
            Male: [
                { name: 'Chinese Male 1', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3' }
            ]
        },
        German: {
            Male: [
                { name: 'German Male 1', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3' }
            ]
        },
        Gujarati: {
            Male: [
                { name: 'Gujarati Male 1', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3' }
            ]
        },
        Marathi: {
            Male: [
                { name: 'Marathi Male 1', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3' }
            ]
        },
        Spanish: {
            Male: [
                { name: 'Spanish Male 1', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3' }
            ],
            Female: [
                { name: 'Spanish Female 1', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3' }
            ]
        },
        Russian: {
            Male: [
                { name: 'Russian Male 1', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3' }
            ]
        }
    };


    const [expandedLanguages, setExpandedLanguages] = useState({});

    const toggleLanguage = (language) => {
        setExpandedLanguages(prev => ({
            ...prev,
            [language]: !prev[language]
        }));
    };

    const [selectedLanguage, setSelectedLanguage] = useState('Hindi');
    const [selectedCategory, setSelectedCategory] = useState('G S Male');
    const [selectedTrack, setSelectedTrack] = useState(0);
    const [error, setError] = useState(null);
    const playerRef = useRef();

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        const categories = Object.keys(voiceCategories[language] || {});
        setSelectedCategory(categories[0] || '');
        setSelectedTrack(0);
        setError(null);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setSelectedTrack(0);
        setError(null);
    };

    const handleTrackSelect = (index) => {
        setSelectedTrack(index);
        setError(null);
    };

    const handleNext = () => {
        const tracks = voiceCategories[selectedLanguage]?.[selectedCategory] || [];
        if (selectedTrack < tracks.length - 1) {
            setSelectedTrack(selectedTrack + 1);
        }
    };

    const handlePrev = () => {
        if (selectedTrack > 0) {
            setSelectedTrack(selectedTrack - 1);
        }
    };

    const handlePlayError = (e) => {
        console.error('Audio error:', e);
        setError('Failed to play audio. Please check the audio file.');
    };

    const currentTrack = voiceCategories[selectedLanguage]?.[selectedCategory]?.[selectedTrack] || {};

    return (
        <div className="mt-5 mb-5">
            <Row>
                {/* Sidebar */}
                <Col md={4} lg={4}>
                    <Card className='h-100'>
                        <Card.Header style={{ backgroundColor: "#737791" }} className="text-white">
                            <div style={{ fontSize: "14px", fontWeight: "600" }}>SELECT LANGUAGE</div>
                        </Card.Header>
                        <ListGroup variant="flush">
                            {Object.keys(voiceCategories).map((language) => (
                                <React.Fragment key={language}>
                                    <ListGroup.Item
                                        active={selectedLanguage === language}
                                        onClick={() => {
                                            handleLanguageSelect(language);
                                            toggleLanguage(language);
                                        }}
                                        action
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <div style={{
                                            color: selectedLanguage === language ? 'white' : '#737791',
                                            fontSize: "14px",
                                            fontWeight: selectedLanguage === language ? "600" : "400"
                                        }}>
                                            {language}
                                        </div>
                                        {expandedLanguages[language] ? (
                                            <FaChevronUp
                                                size={14}
                                                color={selectedLanguage === language ? 'white' : '#737791'}
                                            />
                                        ) : (
                                            <FaChevronDown
                                                size={14}
                                                color={selectedLanguage === language ? 'white' : '#737791'}
                                            />
                                        )}
                                    </ListGroup.Item>

                                    {expandedLanguages[language] && (
                                        <>
                                            {Object.keys(voiceCategories[language]).map((category) => (
                                                <ListGroup.Item
                                                    key={category}
                                                    active={selectedCategory === category}
                                                    onClick={() => handleCategorySelect(category)}
                                                    action
                                                    className="ps-5"
                                                    style={{
                                                        fontSize: "14px",
                                                        fontWeight: "600",
                                                        color: selectedCategory === category ? 'white' : '#737791',
                                                        backgroundColor: selectedCategory === category ? '#0d6efd' : 'transparent'
                                                    }}
                                                >
                                                    {category}
                                                </ListGroup.Item>
                                            ))}
                                        </>
                                    )}
                                </React.Fragment>
                            ))}
                        </ListGroup>
                    </Card>
                </Col>

                {/* Main Content */}
                <Col md={8} lg={8}>
                    <Card className='h-100'>
                        <Card.Header style={{ backgroundColor: " #737791" }} className="text-white">
                            <div style={{ fontSize: "14px", fontWeight: "600" }}>{selectedLanguage} - {selectedCategory}</div>
                        </Card.Header>
                        <Card.Body>
                            {error && <Alert variant="danger">{error}</Alert>}

                            {/* Track List */}
                            <ListGroup className="mb-3">
                                {(voiceCategories[selectedLanguage]?.[selectedCategory] || []).map((track, index) => (
                                    <ListGroup.Item
                                        key={index}
                                        active={index === selectedTrack}
                                        onClick={() => handleTrackSelect(index)}
                                        action
                                    >
                                        {`${(index + 1).toString().padStart(2, '0')}. ${track.name}`}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>

                            {/* Audio Player */}
                            <div className="mt-3">
                                <h6>Now Playing: {currentTrack.name || 'No track selected'}</h6>
                                <AudioPlayer
                                    ref={playerRef}
                                    autoPlay={false}
                                    src={currentTrack.src}
                                    onPlayError={handlePlayError}
                                    onError={handlePlayError}
                                    customAdditionalControls={[]}
                                    customIcons={{
                                        play: <FaPlay />,
                                        pause: <FaPause />,
                                        next: <FaStepForward />,
                                        previous: <FaStepBackward />,
                                    }}
                                    onClickNext={handleNext}
                                    onClickPrevious={handlePrev}
                                />

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default VoicePlayer;