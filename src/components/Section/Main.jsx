import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <div className='Main_wrap container'>
            <div className="main">
                <div className="top">
                <h1>중요 안내</h1>
                <p>
                    이 게임에서 등장하는 모든 내용은 허구이며, 실제와는 관련이 없습니다. 그러나 게임을 진행하는 동안, 혹시라도 다음과 같은 증상이 느껴진다면 즉시 전문가의 도움을 받으세요.<br /><br />
                    1. 게임 속 상황이 실제로 느껴질 때<br />
                    2. 현실과 비현실의 경계가 흐릿해질 때<br />
                    3. 설명할 수 없는 불안감이나 공포감이 지속될 때<br />
                    4. 게임과 관련된 이상 현상을 겪을 때<br /><br />
                    이러한 증상은 일상생활에 영향을 미칠 수 있으므로, 지체하지 말고 가까운 병원이나 정신건강 전문가를 찾아주세요.
                </p>
                <p className='red'>당신의 안전이 가장 중요합니다.</p>
                </div>
                <Link to='/start'>시작하기</Link>
            </div>
        </div>
    )
}

export default Main