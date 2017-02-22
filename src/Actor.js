import React from 'react';

const Posted_Images = {
    facebook: 'https://unsplash.it/600/600/?gravity=west',
    twitter: 'https://unsplash.it/600/600/?gravity=east',
    instagram: 'https://unsplash.it/600/600/?gravity=center',
    tumblr: 'https://unsplash.it/600/600/?random',
};

const ENTER = 'Enter';

class Actor extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {
            comment: "",
            isLiked: false,
        };
    }

    handleKeyPress = (event) => {
      this.setState({
        comment: event.target.value
      });
  }

    handleKeyDown(e) {
      if (e.key !== ENTER) return null;
      console.log('submit')
    }

    toggleLike = () => {
      this.setState({
        like: !this.state.like,
      });
  }

    render() {
        const {actor} = this.props;

    const heartColor = {
        backgroundColor: this.state.like,
    };

        return (
        <div>
            <div className="post-container">
                <div className="actor-container"> 
                    <img className="actor-photo" src={actor.actor_avator} role="presentation"/>
                    <div className="pfwrappwer">
                        <a  className="actor-username" href="{actor.actor_url}">{actor.actor_username}</a>
                        <h4 className="provider">{actor.provider}</h4>
                    </div>
                    <div className="activity-date">{actor.activity_date}</div>
                </div>
                {actor.activity_attachment !== null && (
                    <img className="activity-attachment" src={Posted_Images[actor.provider] || 'https://unsplash.it/g/600/500'} role="presentation"/>

                )}
                {actor.activity_message !== " https://placehold.it/500x500.jpeg/ffffff/000" && (
                    <p className="post-message"><strong>{actor.actor_name} </strong>{actor.activity_message}</p>
                )}
                <div className="likes-comments">
                    <svg onClick={this.toggleLike} className="like-activity" xmlns="http://www.w3.org/2000/svg" width="460" height="425" viewBox="0 0 460 425">
                            <path className="heart-color" d="M1.416 121.146c0 134.755 135.933 170.087 228.562 303.308C317.552 292.05 458.54 251.6 458.54 121.146c0-66.24-53.76-120-120-120-48.047 0-89.4 28.37-108.562 69.187-19.16-40.817-60.514-69.187-108.562-69.187-66.24 0-120 53.76-120 120z" stroke="#000" fillRule="nonzero" fill={this.state.like ? 'red' : '#FFF'} />
                    </svg>
                    {actor.activity_likes !== 1 && (
                        <span className="like-count">&nbsp;{actor.activity_likes}&nbsp;Likes</span>
                    )}
                    {actor.activity_likes === 1 && (
                        <span className="like-count">&nbsp;{actor.activity_likes}&nbsp;Like</span>
                    )}
                    {actor.activity_comments !== 1 && (
                        <span> {actor.activity_comments}&nbsp;Comments</span>
                    )}
                    {actor.activity_comments === 1 && (
                        <span> {actor.activity_comments}&nbsp;Comment</span>
                    )}
                </div>
                <div className="post-comment-container">
                    <input type="text" className="input-comment"  placeholder="Add Comment" onKeyDown={this.handleKeyDown} value={this.state.comment} onChange={this.handleKeyPress} />
                </div>
                
            </div> 
        </div>

        );
    }
}

export default Actor;