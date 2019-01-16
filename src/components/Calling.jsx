import React, { Component } from 'react'
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';

export default class Calling extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          error: null,
          connection: 'Connecting',
          publishVideo: true,
        };
    
        this.sessionEventHandlers = {
          sessionConnected: () => {
            this.setState({ connection: 'Connected' });
          },
          sessionDisconnected: () => {
            this.setState({ connection: 'Disconnected' });
          },
          sessionReconnected: () => {
            this.setState({ connection: 'Reconnected' });
          },
          sessionReconnecting: () => {
            this.setState({ connection: 'Reconnecting' });
          },
        };
    
        this.publisherEventHandlers = {
          accessDenied: () => {
            console.log('User denied access to media source');
          },
          streamCreated: () => {
            console.log('Publisher stream created');
          },
          streamDestroyed: ({ reason }) => {
            console.log(`Publisher stream destroyed because: ${reason}`);
          },
        };
        
    
        this.subscriberEventHandlers = {
          videoEnabled: () => {
            console.log('Subscriber video enabled');
          },
          videoDisabled: () => {
            console.log('Subscriber video disabled');
          },
        };
      }
    
      onSessionError = error => {
        this.setState({ error });
      };
    
      onPublish = () => {
        console.log('Publish Success');
      };
    
      onPublishError = error => {
        this.setState({ error });
      };
    
      onSubscribe = () => {
        console.log('Subscribe Success');
      };
    
      onSubscribeError = error => {
        this.setState({ error });
      };
    
      toggleVideo = () => {
        this.setState({ publishVideo: !this.state.publishVideo });
      };
    
      render() {
        const { apiKey, sessionId, token } = this.props.credentials;
        const { error, connection, publishVideo } = this.state;
        return (
          <div>
            {/* <div id="sessionStatus">Session Status: {connection}</div> */}
            {error ? (
              <div className="error">
                <strong>Error:</strong> {error}
              </div>
            ) : null}
            <OTSession 
              apiKey={apiKey}
              sessionId={sessionId}
              token={token}
              onError={this.onSessionError}
              eventHandlers={this.sessionEventHandlers}
            >
              <div style={{display:"none !important",width:"0px",height:"0px",marginTop:"-70px",marginBottom:"20px"}}>
              <OTPublisher className="layerMinus" style={{display:"none"}}
                properties={{ publishVideo, width: "100%", height: "100%",insertMode:"append" }}
                onPublish={this.onPublish}
                onError={this.onPublishError}
                eventHandlers={this.publisherEventHandlers}
              />
              </div>
              <div style={{marginTop:"68.5px"}}>
              <OTStreams>
                <OTSubscriber className="layerPlus"
                  properties={{publishVideo, width: 786, height: 386,insertMode:"append" }}
                  onSubscribe={this.onSubscribe}
                  onError={this.onSubscribeError}
                  eventHandlers={this.subscriberEventHandlers}
                />
              </OTStreams>
              </div>
              {/* <button id="videoButton" onClick={this.toggleVideo}>
                {publishVideo ? 'Disable' : 'Enable'} Video
              </button> */}
            </OTSession>
          </div>
        );
      }
}
