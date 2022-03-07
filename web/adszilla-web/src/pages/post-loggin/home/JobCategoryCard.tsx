import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

type JobCategoryCardProps = PropsWithChildren<{ title: String, discription: String, icon: String, count: Number }>

const JobCategoryCard = ({title, discription, icon, count} : JobCategoryCardProps) => {
  return (
    <Link to="/dashboard2" className="category-box">
		<div className="category-box-icon">
			<i className="icon-line-awesome-file-code-o"></i>
		</div>
		<div className="category-box-counter">{count}</div>
			<div className="category-box-content">
				<h3>{title}</h3>
				<p>{discription}</p>
			</div>
	</Link>
  );
};

export default JobCategoryCard;