import "./SocialCard.css";

const SocialCard = ({ userData }) => {
	return (
		<div className="card">
			<div className="card__title">
				{userData.name.first} {userData.name.last}
			</div>
			<div className="card__body">
				<div className="card__image">
					<img src={userData.picture.medium} />
				</div>
			</div>
		</div>
	);
};

export default SocialCard;
