import ColorBox from './ColorBox'
import "./ColorBoxGrid.css"
function ColorBoxGrid({colors}) {
    const boxes = [];
    for (let i = 0; i < 25; i += 1) {
        boxes.push(<ColorBox key={i} colors={colors} />);
    }
    return (
        <div className="ColorBoxGrid">
            {boxes}

        </div>
    )
}

export default ColorBoxGrid;