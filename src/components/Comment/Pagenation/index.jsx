import React from "react";
import { Link } from "react-router-dom";

const Pagenation = () => {
	return (
		<div className="lms-paging-holder">
			<Link className="lms-prev">이전 10개</Link>
			<Link className="lms-num lms-on">1</Link>
			<Link className="lms-num">2</Link>
			<Link className="lms-num">3</Link>
			<Link className="lms-num">4</Link>
			<Link className="lms-num">5</Link>
			<Link className="lms-num">6</Link>
			<Link className="lms-num">7</Link>
			<Link className="lms-num">8</Link>
			<Link className="lms-num">9</Link>
			<Link className="lms-num">10</Link>
			<Link className="lms-next">다음 10개</Link>
		</div>
	);
};

export default Pagenation;
