import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function BeforeAfter() {
    return (
        <ReactCompareSlider
        boundsPadding={0}
        keyboardIncrement="5%"
        position={50}
        className='w-[860px] h-[400px] sm:w-full sm:h-[220px]'
        itemOne={<ReactCompareSliderImage src="/before.webp" srcSet="/after.webp" alt="Image one" />}
        itemTwo={<ReactCompareSliderImage src="/after.webp" srcSet="/before.webp" alt="Image two" />}
        />
    );
}

export default BeforeAfter;