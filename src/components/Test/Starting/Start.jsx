import React, { useEffect, useState } from 'react';
import Smile from '../../../assets/img/smile.svg';
import Error from '../Error';
import { Link } from 'react-router-dom';

const Start = () => {
    const texts = [
        `안녕하세요!\n아화정신병원에 오신 걸 환영합니다.`,
        `당당신의 이름은 무엇인가요?`,
        `당${localStorage.getItem('name') || ''}님!\n정말 좋은 이름이네요!`,
    ];

    const [displayText, setDisplayText] = useState("");
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [name, setName] = useState('');
    const [check, setCheck] = useState(false);
    const [pop, setPop] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        let index = 0;
        const typingSpeed = 80;
        let timer;

        const typeText = () => {
            if (index < texts[currentTextIndex].length - 1) {
                setDisplayText(prev => prev + texts[currentTextIndex][index]);
                index++;
                timer = setTimeout(typeText, typingSpeed);
            } else {
                clearTimeout(timer);
                if (currentTextIndex === 0) {
                    setTimeout(() => {
                        setCurrentTextIndex(1);
                        setDisplayText("");
                    }, 1000);
                } else if (currentTextIndex === 1) {
                    setTimeout(() => {
                        setCheck(true);
                    }, 1000);
                } else if (currentTextIndex === 2) {
                    setTimeout(() => {
                        setDone(true);
                    }, 1000);
                }
            }
        };

        typeText();

        return () => {
            clearTimeout(timer);
        };
    }, [currentTextIndex]);

    const onSetName = () => {
        if (!name) {
            setPop(true);
        } else {
            localStorage.setItem("name", name);
            setCheck(false);
            setDisplayText("");
            setCurrentTextIndex(2);
        }
    }

    return (
        <div className='Start_wrap container'>
            <div className="top">
                <img src={Smile} alt="smile img" className={done ? 'stop' : ''} />
            </div>
            {check ? (
                <div className="bottom">
                    <div>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button onClick={onSetName}>제출하기</button>
                    </div>
                </div>
            ) : (
                <>
                    {done ? (
                        <div className="bottom">
                            <div>
                                <p>그럼 시작해볼까요?</p>
                                <Link to='/testing'>
                                    <button>시작하기(취소 불가)</button>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="bottom">
                            <p>
                                {displayText.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    )}
                </>
            )}
            {pop && <Error setPop={setPop} sorry={'이름'} />}
        </div>
    );
}

export default Start;
