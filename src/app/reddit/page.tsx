"use client"

import { Frame, Text, Vector } from "unison-components"

// A look-alike of the r/artificial listing on Reddit, built only from Frame, Text and Vector flags.

const MENU_PATH = "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"

const SEARCH_PATH =
  "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"

const CHAT_PATH = "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"

const PLUS_PATH = "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"

const BELL_PATH =
  "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"

const HOME_PATH = "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"

const POPULAR_PATH = "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"

const EXPLORE_PATH =
  "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5 7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"

const CHEVRON_DOWN_PATH = "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"

const UP_PATH = "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"

const DOWN_PATH = "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"

const SHARE_PATH =
  "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"

const MORE_PATH =
  "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"

export default () => {
  return (
    <Frame fill-white autolayout-vertical height-hug width-fill>
      <Frame alignment-left autolayout-horizontal gap-2 height-14 padding-horizontal-4 width-fill>
        <Frame alignment-left autolayout-horizontal gap-2 height-hug width-64>
          <Frame
            corner-radius-full
            fill-hover-slate-100
            alignment-center
            autolayout-horizontal
            height-10
            transition-colors
            width-10
          >
            <Vector fill-neutral-900 height-6 path={MENU_PATH} viewBox="0 0 24 24" width-6 />
          </Frame>
          <Frame corner-radius-full fill-orange-600 alignment-center autolayout-horizontal height-8 width-8>
            <Frame corner-radius-full fill-white height-3 width-5 />
          </Frame>
          <Text fill-orange-600 typography-2xl>
            reddit
          </Text>
        </Frame>
        <Frame alignment-center autolayout-horizontal height-hug width-fill>
          <Frame
            corner-radius-full
            fill-slate-100
            fill-hover-slate-200
            alignment-left
            autolayout-horizontal
            gap-2
            height-10
            padding-horizontal-4
            transition-colors
            width-xl
          >
            <Vector fill-neutral-900 height-5 path={SEARCH_PATH} viewBox="0 0 24 24" width-5 />
            <Frame
              corner-radius-full
              fill-white
              alignment-center
              autolayout-horizontal
              gap-1
              height-7
              padding-horizontal-2
              width-hug
            >
              <Frame corner-radius-full fill-sky-600 height-4 width-4 />
              <Text fill-neutral-900 typography-xs>
                r/artificial
              </Text>
            </Frame>
            <Text fill-slate-500 typography-sm>
              Search in r/artificial
            </Text>
          </Frame>
        </Frame>
        <Frame alignment-right autolayout-horizontal gap-1 height-hug width-64>
          <Frame
            corner-radius-full
            fill-hover-slate-100
            alignment-center
            autolayout-horizontal
            height-10
            transition-colors
            width-10
          >
            <Vector fill-neutral-900 height-5 path={CHAT_PATH} viewBox="0 0 24 24" width-5 />
          </Frame>
          <Frame
            corner-radius-full
            fill-hover-slate-100
            alignment-center
            autolayout-horizontal
            gap-1p5
            height-10
            padding-horizontal-3
            transition-colors
            width-hug
          >
            <Vector fill-neutral-900 height-5 path={PLUS_PATH} viewBox="0 0 24 24" width-5 />
            <Text fill-neutral-900 typography-sm>
              Create
            </Text>
          </Frame>
          <Frame
            corner-radius-full
            fill-hover-slate-100
            alignment-center
            autolayout-horizontal
            height-10
            transition-colors
            width-10
          >
            <Vector fill-neutral-900 height-5 path={BELL_PATH} viewBox="0 0 24 24" width-5 />
          </Frame>
          <Frame corner-radius-full fill-emerald-500 height-8 width-8 />
        </Frame>
      </Frame>
      <Frame fill-slate-200 height-px width-fill />

      <Frame autolayout-horizontal height-hug width-fill>
        <Frame autolayout-vertical gap-1 height-hug padding-4 width-64>
          <Frame
            corner-radius-lg
            fill-slate-100
            alignment-left
            autolayout-horizontal
            gap-3
            height-10
            padding-horizontal-4
            width-fill
          >
            <Vector fill-neutral-900 height-5 path={HOME_PATH} viewBox="0 0 24 24" width-5 />
            <Text fill-neutral-900 typography-sm>
              Home
            </Text>
          </Frame>
          <Frame
            corner-radius-lg
            fill-hover-slate-50
            alignment-left
            autolayout-horizontal
            gap-3
            height-10
            padding-horizontal-4
            transition-colors
            width-fill
          >
            <Vector fill-neutral-900 height-5 path={POPULAR_PATH} viewBox="0 0 24 24" width-5 />
            <Text fill-neutral-900 typography-sm>
              Popular
            </Text>
          </Frame>
          <Frame
            corner-radius-lg
            fill-hover-slate-50
            alignment-left
            autolayout-horizontal
            gap-3
            height-10
            padding-horizontal-4
            transition-colors
            width-fill
          >
            <Vector fill-neutral-900 height-5 path={EXPLORE_PATH} viewBox="0 0 24 24" width-5 />
            <Text fill-neutral-900 typography-sm>
              Explore
            </Text>
          </Frame>
          <Frame height-2 width-fill />
          <Frame fill-slate-200 height-px width-fill />
          <Frame height-2 width-fill />
          <Frame alignment-left autolayout-horizontal height-10 padding-horizontal-4 width-fill>
            <Frame height-hug width-fill>
              <Text fill-slate-500 typography-xs>
                CUSTOM FEEDS
              </Text>
            </Frame>
            <Vector fill-slate-500 height-5 path={CHEVRON_DOWN_PATH} viewBox="0 0 24 24" width-5 />
          </Frame>
          <Frame alignment-left autolayout-horizontal height-10 padding-horizontal-4 width-fill>
            <Frame height-hug width-fill>
              <Text fill-slate-500 typography-xs>
                RECENT
              </Text>
            </Frame>
            <Vector fill-slate-500 height-5 path={CHEVRON_DOWN_PATH} viewBox="0 0 24 24" width-5 />
          </Frame>
          <Frame
            corner-radius-lg
            fill-hover-slate-50
            alignment-left
            autolayout-horizontal
            gap-3
            height-10
            padding-horizontal-4
            transition-colors
            width-fill
          >
            <Frame corner-radius-full fill-sky-600 height-6 width-6 />
            <Text fill-neutral-900 typography-sm>
              r/artificial
            </Text>
          </Frame>
          <Frame
            corner-radius-lg
            fill-hover-slate-50
            alignment-left
            autolayout-horizontal
            gap-3
            height-10
            padding-horizontal-4
            transition-colors
            width-fill
          >
            <Frame corner-radius-full fill-violet-600 height-6 width-6 />
            <Text fill-neutral-900 typography-sm>
              r/MachineLearning
            </Text>
          </Frame>
          <Frame
            corner-radius-lg
            fill-hover-slate-50
            alignment-left
            autolayout-horizontal
            gap-3
            height-10
            padding-horizontal-4
            transition-colors
            width-fill
          >
            <Frame corner-radius-full fill-amber-500 height-6 width-6 />
            <Text fill-neutral-900 typography-sm>
              r/LocalLLaMA
            </Text>
          </Frame>
          <Frame height-2 width-fill />
          <Frame fill-slate-200 height-px width-fill />
          <Frame height-2 width-fill />
          <Frame alignment-left autolayout-horizontal height-10 padding-horizontal-4 width-fill>
            <Frame height-hug width-fill>
              <Text fill-slate-500 typography-xs>
                RESOURCES
              </Text>
            </Frame>
            <Vector fill-slate-500 height-5 path={CHEVRON_DOWN_PATH} viewBox="0 0 24 24" width-5 />
          </Frame>
        </Frame>
        <Frame fill-slate-200 height-fill width-px />

        <Frame autolayout-vertical gap-4 height-hug padding-horizontal-6 padding-vertical-2 width-fill>
          <Frame corner-radius-xl fill-sky-800 height-32 width-fill />
          <Frame alignment-bottom-left autolayout-horizontal gap-3 height-hug padding-horizontal-4 width-fill>
            <Frame corner-radius-full fill-white alignment-center autolayout-horizontal height-24 width-24>
              <Frame corner-radius-full fill-sky-600 height-20 width-20 />
            </Frame>
            <Frame height-hug padding-bottom-2 width-fill>
              <Text fill-neutral-900 typography-3xl>
                r/artificial
              </Text>
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-2 height-hug padding-bottom-2 width-hug>
              <Frame
                corner-radius-full
                stroke-slate-400
                fill-hover-slate-100
                alignment-center
                autolayout-horizontal
                gap-1
                height-10
                padding-horizontal-4
                transition-colors
                width-hug
              >
                <Vector fill-neutral-900 height-5 path={PLUS_PATH} viewBox="0 0 24 24" width-5 />
                <Text fill-neutral-900 typography-sm>
                  Create Post
                </Text>
              </Frame>
              <Frame
                corner-radius-full
                fill-blue-800
                fill-hover-blue-900
                alignment-center
                autolayout-horizontal
                height-10
                padding-horizontal-4
                transition-colors
                width-hug
              >
                <Text fill-white typography-sm>
                  Join
                </Text>
              </Frame>
              <Frame
                corner-radius-full
                stroke-slate-400
                fill-hover-slate-100
                alignment-center
                autolayout-horizontal
                height-10
                transition-colors
                width-10
              >
                <Vector fill-neutral-900 height-5 path={MORE_PATH} viewBox="0 0 24 24" width-5 />
              </Frame>
            </Frame>
          </Frame>

          <Frame autolayout-horizontal gap-4 height-hug width-fill>
            <Frame autolayout-vertical gap-1 height-hug width-fill>
              <Frame alignment-left autolayout-horizontal gap-2 height-hug padding-vertical-2 width-fill>
                <Frame
                  corner-radius-full
                  fill-hover-slate-100
                  alignment-center
                  autolayout-horizontal
                  gap-1
                  height-8
                  padding-horizontal-3
                  transition-colors
                  width-hug
                >
                  <Text fill-slate-600 typography-xs>
                    Best
                  </Text>
                  <Vector fill-slate-600 height-4 path={CHEVRON_DOWN_PATH} viewBox="0 0 24 24" width-4 />
                </Frame>
                <Frame
                  corner-radius-full
                  fill-hover-slate-100
                  alignment-center
                  autolayout-horizontal
                  gap-1
                  height-8
                  padding-horizontal-3
                  transition-colors
                  width-hug
                >
                  <Text fill-slate-600 typography-xs>
                    Card
                  </Text>
                  <Vector fill-slate-600 height-4 path={CHEVRON_DOWN_PATH} viewBox="0 0 24 24" width-4 />
                </Frame>
              </Frame>
              <Frame fill-slate-200 height-px width-fill />

              <Frame
                corner-radius-2xl
                fill-hover-slate-50
                autolayout-vertical
                gap-2
                height-hug
                padding-horizontal-4
                padding-vertical-3
                transition-colors
                width-fill
              >
                <Frame alignment-left autolayout-horizontal gap-2 height-hug width-fill>
                  <Frame alignment-left autolayout-horizontal gap-2 height-hug width-fill>
                    <Frame corner-radius-full fill-teal-500 height-6 width-6 />
                    <Text fill-neutral-900 typography-xs>
                      u/pixel_tinkerer
                    </Text>
                    <Text fill-slate-500 typography-xs>
                      11 hr. ago
                    </Text>
                  </Frame>
                  <Vector fill-slate-600 height-4 path={MORE_PATH} viewBox="0 0 24 24" width-4 />
                </Frame>
                <Text fill-neutral-900 typography-lg>
                  New York City wants to fine companies that trap you in AI chatbot 'doom loops'
                </Text>
                <Text fill-slate-600 typography-sm>
                  Seems like a good idea. Didn't know it was called a 'doom loop' but hate calling customer services and
                  being stuck with an AI agent.
                </Text>
                <Frame alignment-left autolayout-horizontal gap-3 height-hug padding-top-1 width-fill>
                  <Frame
                    corner-radius-full
                    fill-slate-100
                    alignment-center
                    autolayout-horizontal
                    gap-1p5
                    height-8
                    padding-horizontal-2
                    width-hug
                  >
                    <Vector fill-neutral-900 height-4 path={UP_PATH} viewBox="0 0 24 24" width-4 />
                    <Text fill-neutral-900 typography-xs>
                      412
                    </Text>
                    <Vector fill-neutral-900 height-4 path={DOWN_PATH} viewBox="0 0 24 24" width-4 />
                  </Frame>
                  <Frame
                    corner-radius-full
                    fill-slate-100
                    fill-hover-slate-200
                    alignment-center
                    autolayout-horizontal
                    gap-1p5
                    height-8
                    padding-horizontal-3
                    transition-colors
                    width-hug
                  >
                    <Vector fill-neutral-900 height-4 path={CHAT_PATH} viewBox="0 0 24 24" width-4 />
                    <Text fill-neutral-900 typography-xs>
                      58
                    </Text>
                  </Frame>
                  <Frame
                    corner-radius-full
                    fill-slate-100
                    fill-hover-slate-200
                    alignment-center
                    autolayout-horizontal
                    gap-1p5
                    height-8
                    padding-horizontal-3
                    transition-colors
                    width-hug
                  >
                    <Vector fill-neutral-900 height-4 path={SHARE_PATH} viewBox="0 0 24 24" width-4 />
                    <Text fill-neutral-900 typography-xs>
                      Share
                    </Text>
                  </Frame>
                </Frame>
              </Frame>
              <Frame fill-slate-200 height-px width-fill />

              <Frame
                corner-radius-2xl
                fill-hover-slate-50
                autolayout-vertical
                gap-2
                height-hug
                padding-horizontal-4
                padding-vertical-3
                transition-colors
                width-fill
              >
                <Frame alignment-left autolayout-horizontal gap-2 height-hug width-fill>
                  <Frame alignment-left autolayout-horizontal gap-2 height-hug width-fill>
                    <Frame corner-radius-full fill-orange-500 height-6 width-6 />
                    <Text fill-neutral-900 typography-xs>
                      u/quiet_compiler
                    </Text>
                    <Text fill-slate-500 typography-xs>
                      22 hr. ago
                    </Text>
                  </Frame>
                  <Vector fill-slate-600 height-4 path={MORE_PATH} viewBox="0 0 24 24" width-4 />
                </Frame>
                <Frame autolayout-horizontal gap-4 height-hug width-fill>
                  <Frame autolayout-vertical gap-1 height-hug width-fill>
                    <Text fill-neutral-900 typography-lg>
                      Google DeepMind says four AI agents beat Minecraft in 27 hours by writing 2,783 programs of their
                      own - AI team died 605 times on Easy difficulty and ran up an estimated $520 in tokens
                    </Text>
                    <Text fill-blue-800 typography-xs typography-decoration-underline>
                      tomshardware.com
                    </Text>
                  </Frame>
                  <Frame corner-radius-xl fill-lime-700 height-24 width-32 />
                </Frame>
                <Frame alignment-left autolayout-horizontal gap-3 height-hug padding-top-1 width-fill>
                  <Frame
                    corner-radius-full
                    fill-slate-100
                    alignment-center
                    autolayout-horizontal
                    gap-1p5
                    height-8
                    padding-horizontal-2
                    width-hug
                  >
                    <Vector fill-neutral-900 height-4 path={UP_PATH} viewBox="0 0 24 24" width-4 />
                    <Text fill-neutral-900 typography-xs>
                      1.2K
                    </Text>
                    <Vector fill-neutral-900 height-4 path={DOWN_PATH} viewBox="0 0 24 24" width-4 />
                  </Frame>
                  <Frame
                    corner-radius-full
                    fill-slate-100
                    fill-hover-slate-200
                    alignment-center
                    autolayout-horizontal
                    gap-1p5
                    height-8
                    padding-horizontal-3
                    transition-colors
                    width-hug
                  >
                    <Vector fill-neutral-900 height-4 path={CHAT_PATH} viewBox="0 0 24 24" width-4 />
                    <Text fill-neutral-900 typography-xs>
                      167
                    </Text>
                  </Frame>
                  <Frame
                    corner-radius-full
                    fill-slate-100
                    fill-hover-slate-200
                    alignment-center
                    autolayout-horizontal
                    gap-1p5
                    height-8
                    padding-horizontal-3
                    transition-colors
                    width-hug
                  >
                    <Vector fill-neutral-900 height-4 path={SHARE_PATH} viewBox="0 0 24 24" width-4 />
                    <Text fill-neutral-900 typography-xs>
                      Share
                    </Text>
                  </Frame>
                </Frame>
              </Frame>
              <Frame fill-slate-200 height-px width-fill />

              <Frame
                corner-radius-2xl
                fill-hover-slate-50
                autolayout-vertical
                gap-2
                height-hug
                padding-horizontal-4
                padding-vertical-3
                transition-colors
                width-fill
              >
                <Frame alignment-left autolayout-horizontal gap-2 height-hug width-fill>
                  <Frame alignment-left autolayout-horizontal gap-2 height-hug width-fill>
                    <Frame corner-radius-full fill-pink-500 height-6 width-6 />
                    <Text fill-neutral-900 typography-xs>
                      u/static_harbor
                    </Text>
                    <Text fill-slate-500 typography-xs>
                      3 hr. ago
                    </Text>
                  </Frame>
                  <Vector fill-slate-600 height-4 path={MORE_PATH} viewBox="0 0 24 24" width-4 />
                </Frame>
                <Text fill-neutral-900 typography-lg>
                  What's a task you refuse to hand over to AI, even if it could do it well?
                </Text>
                <Text fill-slate-600 typography-sm>
                  What's your reason? For me its art.
                </Text>
                <Frame alignment-left autolayout-horizontal gap-3 height-hug padding-top-1 width-fill>
                  <Frame
                    corner-radius-full
                    fill-slate-100
                    alignment-center
                    autolayout-horizontal
                    gap-1p5
                    height-8
                    padding-horizontal-2
                    width-hug
                  >
                    <Vector fill-neutral-900 height-4 path={UP_PATH} viewBox="0 0 24 24" width-4 />
                    <Text fill-neutral-900 typography-xs>
                      36
                    </Text>
                    <Vector fill-neutral-900 height-4 path={DOWN_PATH} viewBox="0 0 24 24" width-4 />
                  </Frame>
                  <Frame
                    corner-radius-full
                    fill-slate-100
                    fill-hover-slate-200
                    alignment-center
                    autolayout-horizontal
                    gap-1p5
                    height-8
                    padding-horizontal-3
                    transition-colors
                    width-hug
                  >
                    <Vector fill-neutral-900 height-4 path={CHAT_PATH} viewBox="0 0 24 24" width-4 />
                    <Text fill-neutral-900 typography-xs>
                      94
                    </Text>
                  </Frame>
                  <Frame
                    corner-radius-full
                    fill-slate-100
                    fill-hover-slate-200
                    alignment-center
                    autolayout-horizontal
                    gap-1p5
                    height-8
                    padding-horizontal-3
                    transition-colors
                    width-hug
                  >
                    <Vector fill-neutral-900 height-4 path={SHARE_PATH} viewBox="0 0 24 24" width-4 />
                    <Text fill-neutral-900 typography-xs>
                      Share
                    </Text>
                  </Frame>
                </Frame>
              </Frame>
              <Frame fill-slate-200 height-px width-fill />

              <Frame
                corner-radius-2xl
                fill-hover-slate-50
                autolayout-vertical
                gap-2
                height-hug
                padding-horizontal-4
                padding-vertical-3
                transition-colors
                width-fill
              >
                <Frame alignment-left autolayout-horizontal gap-2 height-hug width-fill>
                  <Frame alignment-left autolayout-horizontal gap-2 height-hug width-fill>
                    <Frame corner-radius-full fill-indigo-500 height-6 width-6 />
                    <Text fill-neutral-900 typography-xs>
                      u/kettle_logic
                    </Text>
                    <Text fill-slate-500 typography-xs>
                      1 hr. ago
                    </Text>
                  </Frame>
                  <Vector fill-slate-600 height-4 path={MORE_PATH} viewBox="0 0 24 24" width-4 />
                </Frame>
                <Text fill-neutral-900 typography-lg>
                  i made something to help me finally understand how llms work
                </Text>
                <Text fill-slate-600 typography-sm>
                  hi everyone i kept watching videos about how ai chatbots work and understanding them while watching,
                  then forgetting everything the next day. so i tried building it myself, step by step.
                </Text>
                <Frame corner-radius-2xl fill-slate-800 height-72 width-fill />
                <Frame alignment-left autolayout-horizontal gap-3 height-hug padding-top-1 width-fill>
                  <Frame
                    corner-radius-full
                    fill-slate-100
                    alignment-center
                    autolayout-horizontal
                    gap-1p5
                    height-8
                    padding-horizontal-2
                    width-hug
                  >
                    <Vector fill-neutral-900 height-4 path={UP_PATH} viewBox="0 0 24 24" width-4 />
                    <Text fill-neutral-900 typography-xs>
                      18
                    </Text>
                    <Vector fill-neutral-900 height-4 path={DOWN_PATH} viewBox="0 0 24 24" width-4 />
                  </Frame>
                  <Frame
                    corner-radius-full
                    fill-slate-100
                    fill-hover-slate-200
                    alignment-center
                    autolayout-horizontal
                    gap-1p5
                    height-8
                    padding-horizontal-3
                    transition-colors
                    width-hug
                  >
                    <Vector fill-neutral-900 height-4 path={CHAT_PATH} viewBox="0 0 24 24" width-4 />
                    <Text fill-neutral-900 typography-xs>
                      7
                    </Text>
                  </Frame>
                  <Frame
                    corner-radius-full
                    fill-slate-100
                    fill-hover-slate-200
                    alignment-center
                    autolayout-horizontal
                    gap-1p5
                    height-8
                    padding-horizontal-3
                    transition-colors
                    width-hug
                  >
                    <Vector fill-neutral-900 height-4 path={SHARE_PATH} viewBox="0 0 24 24" width-4 />
                    <Text fill-neutral-900 typography-xs>
                      Share
                    </Text>
                  </Frame>
                </Frame>
              </Frame>
              <Frame fill-slate-200 height-px width-fill />

              <Frame
                corner-radius-2xl
                fill-hover-slate-50
                autolayout-vertical
                gap-2
                height-hug
                padding-horizontal-4
                padding-vertical-3
                transition-colors
                width-fill
              >
                <Frame alignment-left autolayout-horizontal gap-2 height-hug width-fill>
                  <Frame alignment-left autolayout-horizontal gap-2 height-hug width-fill>
                    <Frame corner-radius-full fill-cyan-600 height-6 width-6 />
                    <Text fill-neutral-900 typography-xs>
                      u/loopwright
                    </Text>
                    <Text fill-slate-500 typography-xs>
                      7 hr. ago
                    </Text>
                  </Frame>
                  <Vector fill-slate-600 height-4 path={MORE_PATH} viewBox="0 0 24 24" width-4 />
                </Frame>
                <Frame autolayout-horizontal gap-4 height-hug width-fill>
                  <Frame autolayout-vertical gap-1 height-hug width-fill>
                    <Text fill-neutral-900 typography-lg>
                      OpenAI acquires Orchestra Bio, folds drug-development agents into Rosalind
                    </Text>
                    <Text fill-blue-800 typography-xs typography-decoration-underline>
                      vectorwire.ai
                    </Text>
                  </Frame>
                  <Frame corner-radius-xl fill-emerald-800 height-24 width-32 />
                </Frame>
                <Frame alignment-left autolayout-horizontal gap-3 height-hug padding-top-1 width-fill>
                  <Frame
                    corner-radius-full
                    fill-slate-100
                    alignment-center
                    autolayout-horizontal
                    gap-1p5
                    height-8
                    padding-horizontal-2
                    width-hug
                  >
                    <Vector fill-neutral-900 height-4 path={UP_PATH} viewBox="0 0 24 24" width-4 />
                    <Text fill-neutral-900 typography-xs>
                      64
                    </Text>
                    <Vector fill-neutral-900 height-4 path={DOWN_PATH} viewBox="0 0 24 24" width-4 />
                  </Frame>
                  <Frame
                    corner-radius-full
                    fill-slate-100
                    fill-hover-slate-200
                    alignment-center
                    autolayout-horizontal
                    gap-1p5
                    height-8
                    padding-horizontal-3
                    transition-colors
                    width-hug
                  >
                    <Vector fill-neutral-900 height-4 path={CHAT_PATH} viewBox="0 0 24 24" width-4 />
                    <Text fill-neutral-900 typography-xs>
                      12
                    </Text>
                  </Frame>
                  <Frame
                    corner-radius-full
                    fill-slate-100
                    fill-hover-slate-200
                    alignment-center
                    autolayout-horizontal
                    gap-1p5
                    height-8
                    padding-horizontal-3
                    transition-colors
                    width-hug
                  >
                    <Vector fill-neutral-900 height-4 path={SHARE_PATH} viewBox="0 0 24 24" width-4 />
                    <Text fill-neutral-900 typography-xs>
                      Share
                    </Text>
                  </Frame>
                </Frame>
              </Frame>
              <Frame fill-slate-200 height-px width-fill />

              <Frame
                corner-radius-2xl
                fill-hover-slate-50
                autolayout-vertical
                gap-2
                height-hug
                padding-horizontal-4
                padding-vertical-3
                transition-colors
                width-fill
              >
                <Frame alignment-left autolayout-horizontal gap-2 height-hug width-fill>
                  <Frame alignment-left autolayout-horizontal gap-2 height-hug width-fill>
                    <Frame corner-radius-full fill-yellow-500 height-6 width-6 />
                    <Text fill-neutral-900 typography-xs>
                      u/maple_and_moss
                    </Text>
                    <Text fill-slate-500 typography-xs>
                      9 hr. ago
                    </Text>
                  </Frame>
                  <Vector fill-slate-600 height-4 path={MORE_PATH} viewBox="0 0 24 24" width-4 />
                </Frame>
                <Text fill-neutral-900 typography-lg>
                  {"Discover AI - A Teaching & Learning Guide - 51 hands-on labs for learning how AI actually works."}
                </Text>
                <Text fill-slate-600 typography-sm>
                  This is a learning resource about how artificial intelligence works, broken down into its component
                  parts. Understand each one, then put them together to create something of your own.
                </Text>
                <Frame alignment-left autolayout-horizontal gap-3 height-hug padding-top-1 width-fill>
                  <Frame
                    corner-radius-full
                    fill-slate-100
                    alignment-center
                    autolayout-horizontal
                    gap-1p5
                    height-8
                    padding-horizontal-2
                    width-hug
                  >
                    <Vector fill-neutral-900 height-4 path={UP_PATH} viewBox="0 0 24 24" width-4 />
                    <Text fill-neutral-900 typography-xs>
                      27
                    </Text>
                    <Vector fill-neutral-900 height-4 path={DOWN_PATH} viewBox="0 0 24 24" width-4 />
                  </Frame>
                  <Frame
                    corner-radius-full
                    fill-slate-100
                    fill-hover-slate-200
                    alignment-center
                    autolayout-horizontal
                    gap-1p5
                    height-8
                    padding-horizontal-3
                    transition-colors
                    width-hug
                  >
                    <Vector fill-neutral-900 height-4 path={CHAT_PATH} viewBox="0 0 24 24" width-4 />
                    <Text fill-neutral-900 typography-xs>
                      4
                    </Text>
                  </Frame>
                  <Frame
                    corner-radius-full
                    fill-slate-100
                    fill-hover-slate-200
                    alignment-center
                    autolayout-horizontal
                    gap-1p5
                    height-8
                    padding-horizontal-3
                    transition-colors
                    width-hug
                  >
                    <Vector fill-neutral-900 height-4 path={SHARE_PATH} viewBox="0 0 24 24" width-4 />
                    <Text fill-neutral-900 typography-xs>
                      Share
                    </Text>
                  </Frame>
                </Frame>
              </Frame>
            </Frame>

            <Frame autolayout-vertical height-hug padding-top-4 width-80>
              <Frame corner-radius-2xl fill-slate-50 autolayout-vertical gap-4 height-hug padding-4 width-fill>
                <Frame autolayout-vertical gap-1 height-hug width-fill>
                  <Text fill-neutral-900 typography-base>
                    Artificial Intelligence (AI)
                  </Text>
                  <Text fill-slate-600 typography-sm>
                    Reddit's home for Artificial Intelligence (AI)
                  </Text>
                </Frame>
                <Frame alignment-left autolayout-horizontal gap-2 height-hug width-fill>
                  <Text fill-slate-500 typography-xs>
                    Created Jan 21, 2008
                  </Text>
                  <Text fill-slate-500 typography-xs>
                    Public
                  </Text>
                </Frame>
                <Frame autolayout-horizontal gap-4 height-hug width-fill>
                  <Frame autolayout-vertical height-hug width-fill>
                    <Text fill-neutral-900 typography-base>
                      1.2M
                    </Text>
                    <Text fill-slate-500 typography-xs>
                      Members
                    </Text>
                  </Frame>
                  <Frame autolayout-vertical height-hug width-fill>
                    <Frame alignment-left autolayout-horizontal gap-1 height-hug width-hug>
                      <Frame corner-radius-full fill-green-500 animate-pulse height-2 width-2 />
                      <Text fill-neutral-900 typography-base>
                        418
                      </Text>
                    </Frame>
                    <Text fill-slate-500 typography-xs>
                      Online
                    </Text>
                  </Frame>
                  <Frame autolayout-vertical height-hug width-fill>
                    <Text fill-neutral-900 typography-base>
                      Top 1%
                    </Text>
                    <Text fill-slate-500 typography-xs>
                      Rank by size
                    </Text>
                  </Frame>
                </Frame>
                <Frame fill-slate-200 height-px width-fill />
                <Text fill-slate-500 typography-xs>
                  RULES
                </Text>
                <Frame autolayout-vertical gap-3 height-hug width-fill>
                  <Frame alignment-left autolayout-horizontal gap-3 height-hug width-fill>
                    <Text fill-slate-500 typography-sm>
                      1
                    </Text>
                    <Frame height-hug width-fill>
                      <Text fill-neutral-900 typography-sm>
                        Stay on topic
                      </Text>
                    </Frame>
                    <Vector fill-slate-500 height-4 path={CHEVRON_DOWN_PATH} viewBox="0 0 24 24" width-4 />
                  </Frame>
                  <Frame alignment-left autolayout-horizontal gap-3 height-hug width-fill>
                    <Text fill-slate-500 typography-sm>
                      2
                    </Text>
                    <Frame height-hug width-fill>
                      <Text fill-neutral-900 typography-sm>
                        No spam or self-promotion
                      </Text>
                    </Frame>
                    <Vector fill-slate-500 height-4 path={CHEVRON_DOWN_PATH} viewBox="0 0 24 24" width-4 />
                  </Frame>
                  <Frame alignment-left autolayout-horizontal gap-3 height-hug width-fill>
                    <Text fill-slate-500 typography-sm>
                      3
                    </Text>
                    <Frame height-hug width-fill>
                      <Text fill-neutral-900 typography-sm>
                        Be civil
                      </Text>
                    </Frame>
                    <Vector fill-slate-500 height-4 path={CHEVRON_DOWN_PATH} viewBox="0 0 24 24" width-4 />
                  </Frame>
                </Frame>
                <Frame fill-slate-200 height-px width-fill />
                <Text fill-slate-500 typography-xs>
                  MODERATORS
                </Text>
                <Frame alignment-left autolayout-horizontal gap-2 height-hug width-fill>
                  <Frame corner-radius-full fill-rose-500 height-8 width-8 />
                  <Text fill-neutral-900 typography-sm>
                    u/AutoModerator
                  </Text>
                </Frame>
                <Frame
                  corner-radius-full
                  fill-slate-200
                  fill-hover-slate-300
                  alignment-center
                  autolayout-horizontal
                  height-8
                  transition-colors
                  width-fill
                >
                  <Text fill-neutral-900 typography-xs>
                    Message Mods
                  </Text>
                </Frame>
              </Frame>
            </Frame>
          </Frame>
        </Frame>
      </Frame>
    </Frame>
  )
}
