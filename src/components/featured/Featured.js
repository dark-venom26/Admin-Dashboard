import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { InView } from 'react-intersection-observer';

function Featured() {
    
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <InView>
                    {({ inView, ref }) =>{
                    
                    let percentage = inView ? 80 : 0;
                    
                    return (
                        <div ref={ref}>
                            <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            strokeWidth={5}
                            />
                        </div>
                    );
                    }}
                </InView>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">$420</p>
            <p className="desc">Previous Transaction processing. Last payments may not be included</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <ExpandLessOutlinedIcon fontSize="small"/>
                        <div className="result">$12.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult negative">
                        <ExpandMoreOutlinedIcon fontSize="small"/>
                        <div className="result">$12.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <ExpandLessOutlinedIcon fontSize="small"/>
                        <div className="result">$12.4k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured