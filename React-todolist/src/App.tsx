import React, { useEffect, useRef, useState } from 'react';

type Props = {};

const App: React.FC<Props> = (props): React.ReactNode => {
    const ref = useRef(null);
    const [IsShow,SetIsShow] = useState(false);
    const OnSetIsShow = () => {
        SetIsShow(!IsShow);
    }
    useEffect(() => {
        console.log(ref.current);
    },[IsShow]);
    return (
        <div>
            {IsShow && <div ref={ref} className='showwww'>Showwwww</div>}
            <button onClick={OnSetIsShow}>Clicked</button>
        </div>
    )
};

export default App;