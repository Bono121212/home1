import React from 'react';
import Search from '../Search';
import Board from '../Board';
import BoardEmpty from '../BoardEmpty';

const ContentArea = (props) => {
	return (
		<div className='authority-section'>
			<Search />
			{props.empty
				?
					<BoardEmpty />
				:
					<Board />
			}
		</div>
	)
}
export default ContentArea
