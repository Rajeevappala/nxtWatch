/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaSearch} from 'react-icons/fa'
import Header from '../Header'
import Videos from '../Videos'

import {HomeContainer, UlList, SearchContainer} from './styledComponents'

class Home extends Component {
  state = {
    updatedList: [],
  }

  componentDidMount() {
    this.fetchDataComponent()
  }

  fetchDataComponent = async () => {
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const fetchData = await fetch('https://apis.ccbp.in/videos/all', options)
    const data = await fetchData.json()
    if (fetchData.ok) {
      const finalData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({updatedList: finalData})
    }
  }

  render() {
    const {updatedList} = this.state
    console.log(updatedList)
    return (
      <div>
        <Header />
        <HomeContainer data-testid="home">
          <SearchContainer>
            <input type="search" placeholder="Search" />
            <button type="button" data-testid="searchButton">
              <FaSearch />
            </button>
          </SearchContainer>
          <UlList>
            {updatedList.map(eachList => (
              <Videos eachVideo={eachList} key={eachList.id} />
            ))}
          </UlList>
        </HomeContainer>
      </div>
    )
  }
}

export default Home
