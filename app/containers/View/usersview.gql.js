export default `
    query findBroadcaster($uid: ID!){
        findBroadcaster(uid: $uid) {
          uid
          name
          image
          aboutme
          created
          follower
          following
          online
          location
          followers{
            uid
            name
            image
            aboutme
            follower
            following
            online
            location
          }
          followings{
            uid
            name
            image
            aboutme
            follower
            following
            online
            location
          }
          broadcaster{
            views
            created
            rP
            rN
            totalVideos
            streamId
          }
          broadcasterListDetail{
            totalViews
            on
            title
            banner
            aboutBroadcast
          }
          broadcasterDetail{
            lastPublished
            lastStartPublishing
            playUrl
            playbackId
          }
        }
      }
`;
