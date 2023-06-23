import React, { useEffect} from 'react';
import { Container } from 'react-bootstrap';
import GiftCard from '../assets/images/gift-card.png';
const WebsiteLayout = React.lazy(() => import('../components/website-layout'));

const GiftcardPage = () => {
  useEffect(() => {
    document.title = "Gift card - Wise Talkies";
  }, []);

  // Manage Cards
  const cards1 = [
    {
      id: 1,
      tag: "Travel",
      title: "Diwali Offers",
      description: "Grab this amazing offer to get 1000Rs Ecard for next travel.",
      image: GiftCard
    },
    {
      id: 2,
      tag: "Travel",
      title: "Diwali Offers",
      description: "Grab this amazing offer to get 1000Rs Ecard for next travel.",
      image: GiftCard
    },
    {
      id: 3,
      tag: "Travel",
      title: "Diwali Offers",
      description: "Grab this amazing offer to get 1000Rs Ecard for next travel.",
      image: GiftCard
    }
  ]

  const manageCards = cards1.map(c => {
    return (
      <div className="giftCard" key={c.id}>
        <img src={c.image} alt="Gift Card" />
        <span>{c.tag}</span>
        <div className='giftInfo'>
          <h3>{c.title}</h3>
          <p>{c.description}</p>
        </div>
      </div>
    )
  })

  // Gift Cards
  const cards2 = [
    {
      id: 1,
      tag: "Travel",
      title: "Diwali Offers",
      description: "Grab this amazing offer to get 1000Rs Ecard for next travel.",
      image: GiftCard
    },
    {
      id: 2,
      tag: "Travel",
      title: "Diwali Offers",
      description: "Grab this amazing offer to get 1000Rs Ecard for next travel.",
      image: GiftCard
    },
    {
      id: 3,
      tag: "Travel",
      title: "Diwali Offers",
      description: "Grab this amazing offer to get 1000Rs Ecard for next travel.",
      image: GiftCard
    }
  ]

  const giftCards = cards2.map(c => {
    return (
      <div className="giftCard" key={c.id}>
        <img src={c.image} alt="Gift Card" />
        <span>{c.tag}</span>
        <div className='giftInfo'>
          <h3>{c.title}</h3>
          <p>{c.description}</p>
        </div>
      </div>
    )
  })

  return (
    <div>
      <Container className='gift-container'>
        <div className='gift-header'>
          <h2>WiseTalkies Gift Cards.</h2>
          <p>Perfect gift for learners to get one on one coaching from the world’s best teachers.</p>
          <button onClick={event =>  window.location.href='/#'} class="go-back-btn">Buy  a Gift card</button>
        </div>
        <div>
          <div className='cardsHead'>
            <div>
              <div className='cardsInfo'>
                <h3>Manage your Gift Cards.</h3>
                <span>See all</span>
              </div>
            </div>
            <div className='gift-grid'>{manageCards}</div>
          </div>
          <div className='cardsHead'>
            <div>
              <div className='cardsInfo'>
                <h3>Gift Your Friend</h3>
                <span>See all</span>
              </div>
            </div>
            <div className='gift-grid'>{giftCards}</div>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default GiftcardPage