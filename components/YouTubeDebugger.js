const React = require('react')
export default class YouTubeDebugger extends React.Component {
  constructor() {
    super()

    this.handleBitrateChange = this.handleBitrateChange.bind(this)
    this.handleResolutionChange = this.handleResolutionChange.bind(this)

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

    handleBitrateChange() {
      this.setState({
         settings: Object.assign({}, this.state.settings, {
           bitrate: 12
         }),
       });
     }

    handleResolutionChange() {
      this.setState({
        settings: Object.assign({}, this.state.settings, {
          video: Object.assign({}, this.state.video, {
            resolution: '720p'
          })
        })
      })
    }

  render() {
    return (
      <div>
        <button onClick={this.handleBitrateChange} className="bitrate">Change Bitrate</button>
        <button onClick={this.handleResolutionChange} className="resolution">Change Resolution</button>
      </div>
    )
  }
}
