import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

//style
import './Cards.css'

function Cards(props) {
  const [show, setShowMore] = useState(false)
  return (
    <div className="card">
      <Card>
        <Card.Img
          variant="top"
          src="https://reactjs.org/logo-og.png"
          width="300px"
        />
        <Card.Body>
          <Card.Title className="card_title">
            <h2>React Js</h2>
          </Card.Title>
          <Card.Text>
            React is a free and open-source front-end JavaScript library for
            building user interfaces or UI components.It is maintained by
            Facebook and a community of individual developers and companies.
            {show ? (
              <span>
                React can be used as a base in the development of single-page or
                mobile applications and a community of individual developers and
                companies.React can be used as a base in the development of
                single-page or mobile applications. However, React is only
                concerned with state management and rendering that state to the
                DOM, so creating React applications usually requires the use of
                additional libraries for routing, as well as certain client-side
                functionality React was created by Jordan Walke, a software
                engineer at Facebook, who released an early prototype of React
                called "FaxJS".[29][30] He was influenced by XHP, an HTML
                component library for PHP. It was first deployed on Facebook's
                News Feed in 2011 and later on Instagram in 2012.[31] It was
                open-sourced at JSConf US in May 2013.[30] React Native, which
                enables native Android, iOS, and UWP development with React, was
                announced at Facebook's React Conf in February 2015 and
                open-sourced in March 2015. On April 18, 2017, Facebook
                announced React Fiber, a new set of internal algorithms for
                rendering, as opposed to React's old rendering algorithm,
                Stack.[32] React Fiber was to become the foundation of any
                future improvements and feature development of the React
                library.[33][needs update] The actual syntax for programming
                with React does not change; only the way that the syntax is
                executed has changed.[34] React's old rendering system, Stack,
                was developed at a time when the focus of the system on dynamic
                change was not understood. Stack was slow to draw complex
                animation, for example, trying to accomplish all of it in one
                chunk. Fiber breaks down animation into segments that can be
                spread out over multiple frames. Likewise, the structure of a
                page can be broken into segments that may be maintained and
                updated separately. JavaScript functions and virtual DOM objects
                are called "fibers", and each can be operated and updated
                separately, allowing for smoother on-screen rendering.[35] On
                September 26, 2017, React 16.0 was released to the public.[36]
                On February 16, 2019, React 16.8 was released to the public.[37]
                The release introduced React Hooks.[38] On August 10, 2020, the
                React team announced the first release candidate for React
                v17.0, notable as the first major release without major changes
                to the React developer-facing API.[39]
              </span>
            ) : null}
          </Card.Text>
          <Button variant="success" onClick={() => setShowMore(true)}>
            Expand More
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cards
