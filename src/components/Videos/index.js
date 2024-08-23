import {
  ListCard,
  ImageElement,
  ChannelLogo,
  Heading,
  Paragraph,
  InnerContainer,
} from './styledComponents'

const Videos = props => {
  const {eachVideo} = props
  const {
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    name,
    profileImageUrl,
  } = eachVideo
  return (
    <div>
      <ListCard>
        <div>
          <ImageElement src={thumbnailUrl} alt=" video thumbnail" />
        </div>
        <InnerContainer>
          <div>
            <ChannelLogo src={profileImageUrl} alt="channel logo" />
          </div>
          <div>
            <Heading>{title}</Heading>
            <Paragraph>{name}</Paragraph>

            <InnerContainer>
              <Paragraph>{viewCount} Views </Paragraph>
              <Paragraph>{publishedAt}</Paragraph>
            </InnerContainer>
          </div>
        </InnerContainer>
      </ListCard>
    </div>
  )
}

export default Videos
