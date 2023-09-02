import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from '../../API';
import { List, Title, Item } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const result = async () => {
      try {
        const result = await fetchReview(movieId);
        if (result.length) {
          setReviews(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, [movieId]);

  return (
    <div>
      <List>
        {reviews.length ? (
          reviews.map(review => {
            const { author, content, id } = review;
            return (
              <Item key={id}>
                <Title>Author: {author}</Title>
                <p>{content}</p>
              </Item>
            );
          })
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </List>
    </div>
  );
};

export default Reviews;
