"use client"

import { Frame, Text, Vector } from "@unison"

// A look-alike of a Google results page for "Puppies", built only from Frame, Text and Vector flags.

const CLOSE_PATH =
  "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"

const MIC_PATH =
  "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"

const CAMERA_PATH =
  "M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zM9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"

const SEARCH_PATH =
  "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"

const APPS_PATH =
  "M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"

const SPARKLE_PATH = "M12 2c.6 5.2 4.8 9.4 10 10-5.2.6-9.4 4.8-10 10-.6-5.2-4.8-9.4-10-10 5.2-.6 9.4-4.8 10-10z"

const CHEVRON_DOWN_PATH = "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"

const CHEVRON_RIGHT_PATH = "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"

const ARROW_RIGHT_PATH = "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"

const MORE_VERT_PATH =
  "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"

const PLAY_PATH = "M8 5v14l11-7z"

export default () => {
  return (
    <Frame fill-white autolayout-vertical height-hug width-fill>
      <Frame alignment-left autolayout-horizontal gap-5 height-hug padding-horizontal-7 padding-top-6 width-fill>
        <Frame alignment-left autolayout-horizontal height-hug width-28>
          <Text fill-blue-500 typography-3xl>
            G
          </Text>
          <Text fill-red-500 typography-3xl>
            o
          </Text>
          <Text fill-amber-400 typography-3xl>
            o
          </Text>
          <Text fill-blue-500 typography-3xl>
            g
          </Text>
          <Text fill-green-600 typography-3xl>
            l
          </Text>
          <Text fill-red-500 typography-3xl>
            e
          </Text>
        </Frame>
        <Frame
          corner-radius-full
          fill-white
          stroke-neutral-200
          effect-shadow-sm
          alignment-left
          autolayout-horizontal
          gap-3
          height-12
          padding-left-5
          padding-right-4
          transition-shadow
          width-2xl
        >
          <Frame height-hug width-fill>
            <Text fill-neutral-900 typography-base>
              Puppies
            </Text>
          </Frame>
          <Vector fill-neutral-600 height-6 path={CLOSE_PATH} viewBox="0 0 24 24" width-6 />
          <Frame fill-neutral-300 height-6 width-px />
          <Vector fill-blue-500 height-6 path={MIC_PATH} viewBox="0 0 24 24" width-6 />
          <Vector fill-blue-500 height-6 path={CAMERA_PATH} viewBox="0 0 24 24" width-6 />
          <Vector fill-blue-500 height-6 path={SEARCH_PATH} viewBox="0 0 24 24" width-6 />
        </Frame>
        <Frame height-hug width-fill />
        <Frame
          corner-radius-full
          fill-hover-neutral-100
          alignment-center
          autolayout-horizontal
          height-10
          transition-colors
          width-10
        >
          <Vector fill-neutral-600 height-6 path={APPS_PATH} viewBox="0 0 24 24" width-6 />
        </Frame>
        <Frame
          corner-radius-full
          fill-blue-700
          fill-hover-blue-800
          alignment-center
          autolayout-horizontal
          height-10
          padding-horizontal-6
          transition-colors
          width-hug
        >
          <Text fill-white typography-sm>
            Sign in
          </Text>
        </Frame>
      </Frame>

      <Frame alignment-left autolayout-horizontal gap-5 height-hug padding-horizontal-7 padding-top-3 width-fill>
        <Frame height-hug width-28 />
        <Frame alignment-bottom-left autolayout-horizontal gap-6 height-hug width-2xl>
          <Frame autolayout-vertical gap-2p5 height-hug padding-top-2 width-hug>
            <Frame alignment-left autolayout-horizontal gap-1 height-hug width-hug>
              <Vector fill-neutral-600 height-4 path={SPARKLE_PATH} viewBox="0 0 24 24" width-4 />
              <Text fill-neutral-600 fill-hover-neutral-900 typography-sm>
                AI Mode
              </Text>
            </Frame>
            <Frame height-1 width-fill />
          </Frame>
          <Frame autolayout-vertical gap-2p5 height-hug padding-top-2 width-hug>
            <Text fill-neutral-900 typography-sm>
              All
            </Text>
            <Frame corner-radius-top-left-sm corner-radius-top-right-sm fill-neutral-900 height-1 width-fill />
          </Frame>
          <Frame autolayout-vertical gap-2p5 height-hug padding-top-2 width-hug>
            <Text fill-neutral-600 fill-hover-neutral-900 typography-sm>
              Images
            </Text>
            <Frame height-1 width-fill />
          </Frame>
          <Frame autolayout-vertical gap-2p5 height-hug padding-top-2 width-hug>
            <Text fill-neutral-600 fill-hover-neutral-900 typography-sm>
              Videos
            </Text>
            <Frame height-1 width-fill />
          </Frame>
          <Frame autolayout-vertical gap-2p5 height-hug padding-top-2 width-hug>
            <Text fill-neutral-600 fill-hover-neutral-900 typography-sm>
              Short videos
            </Text>
            <Frame height-1 width-fill />
          </Frame>
          <Frame autolayout-vertical gap-2p5 height-hug padding-top-2 width-hug>
            <Text fill-neutral-600 fill-hover-neutral-900 typography-sm>
              News
            </Text>
            <Frame height-1 width-fill />
          </Frame>
          <Frame autolayout-vertical gap-2p5 height-hug padding-top-2 width-hug>
            <Text fill-neutral-600 fill-hover-neutral-900 typography-sm>
              Forums
            </Text>
            <Frame height-1 width-fill />
          </Frame>
          <Frame autolayout-vertical gap-2p5 height-hug padding-top-2 width-hug>
            <Frame alignment-left autolayout-horizontal gap-0p5 height-hug width-hug>
              <Text fill-neutral-600 fill-hover-neutral-900 typography-sm>
                More
              </Text>
              <Vector fill-neutral-600 height-4 path={CHEVRON_DOWN_PATH} viewBox="0 0 24 24" width-4 />
            </Frame>
            <Frame height-1 width-fill />
          </Frame>
          <Frame height-hug width-fill />
          <Frame autolayout-vertical gap-2p5 height-hug padding-top-2 width-hug>
            <Text fill-neutral-600 fill-hover-neutral-900 typography-sm>
              Tools
            </Text>
            <Frame height-1 width-fill />
          </Frame>
        </Frame>
      </Frame>
      <Frame fill-neutral-200 height-px width-fill />

      <Frame autolayout-horizontal gap-5 height-hug padding-horizontal-7 padding-vertical-6 width-fill>
        <Frame height-hug width-28 />
        <Frame autolayout-vertical gap-8 height-hug width-2xl>
          <Frame autolayout-vertical gap-4 height-hug width-fill>
            <Text fill-neutral-900 typography-xl>
              Videos
            </Text>
            <Frame alignment-left autolayout-horizontal gap-4 height-hug width-fill>
              <Frame corner-radius-xl fill-amber-200 alignment-bottom-right height-24 padding-1p5 width-40>
                <Frame
                  corner-radius-md
                  fill-neutral-900
                  alignment-center
                  autolayout-horizontal
                  gap-0p5
                  padding-horizontal-1p5
                  padding-vertical-0p5
                  width-hug
                >
                  <Vector fill-white height-3 path={PLAY_PATH} viewBox="0 0 24 24" width-3 />
                  <Text fill-white typography-xs>
                    0:58
                  </Text>
                </Frame>
              </Frame>
              <Frame autolayout-vertical gap-1 height-hug width-fill>
                <Text fill-indigo-800 fill-hover-indigo-900 typography-lg>
                  People in Finland are watching these puppies 24/7
                </Text>
                <Text fill-neutral-600 typography-sm>
                  CNN
                </Text>
                <Text fill-neutral-600 typography-sm>
                  18 hours ago
                </Text>
              </Frame>
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-4 height-hug width-fill>
              <Frame corner-radius-xl fill-orange-200 alignment-bottom-right height-24 padding-1p5 width-40>
                <Frame
                  corner-radius-md
                  fill-neutral-900
                  alignment-center
                  autolayout-horizontal
                  gap-0p5
                  padding-horizontal-1p5
                  padding-vertical-0p5
                  width-hug
                >
                  <Vector fill-white height-3 path={PLAY_PATH} viewBox="0 0 24 24" width-3 />
                  <Text fill-white typography-xs>
                    1:03
                  </Text>
                </Frame>
              </Frame>
              <Frame autolayout-vertical gap-1 height-hug width-fill>
                <Text fill-indigo-800 fill-hover-indigo-900 typography-lg>
                  A livestream showing a litter of puppies' first few weeks of life is ...
                </Text>
                <Text fill-neutral-600 typography-sm>
                  Facebook - CNN
                </Text>
                <Text fill-neutral-600 typography-sm>
                  12 hours ago
                </Text>
              </Frame>
            </Frame>
            <Frame alignment-left autolayout-horizontal gap-4 height-hug width-fill>
              <Frame corner-radius-xl fill-yellow-100 alignment-bottom-right height-24 padding-1p5 width-40>
                <Frame
                  corner-radius-md
                  fill-neutral-900
                  alignment-center
                  autolayout-horizontal
                  gap-0p5
                  padding-horizontal-1p5
                  padding-vertical-0p5
                  width-hug
                >
                  <Vector fill-white height-3 path={PLAY_PATH} viewBox="0 0 24 24" width-3 />
                  <Text fill-white typography-xs>
                    11:03
                  </Text>
                </Frame>
              </Frame>
              <Frame autolayout-vertical gap-1 height-hug width-fill>
                <Text fill-indigo-800 fill-hover-indigo-900 typography-lg>
                  You Can't Watch These Cute PUPPIES Just Once! FUNNY ...
                </Text>
                <Text fill-neutral-600 typography-sm>
                  YouTube - Funny Pet's Life
                </Text>
                <Text fill-neutral-600 typography-sm>
                  1 month ago
                </Text>
              </Frame>
            </Frame>
            <Frame alignment-center autolayout-horizontal height-hug width-fill>
              <Frame fill-neutral-200 height-px width-fill />
              <Frame
                corner-radius-full
                fill-neutral-100
                fill-hover-neutral-200
                alignment-center
                autolayout-horizontal
                gap-2
                height-10
                padding-horizontal-20
                transition-colors
                width-hug
              >
                <Text fill-neutral-900 typography-sm>
                  View all
                </Text>
                <Vector fill-neutral-900 height-4 path={ARROW_RIGHT_PATH} viewBox="0 0 24 24" width-4 />
              </Frame>
              <Frame fill-neutral-200 height-px width-fill />
            </Frame>
          </Frame>

          <Frame autolayout-vertical height-hug width-fill>
            <Frame height-hug padding-bottom-3 width-fill>
              <Text fill-neutral-900 typography-xl>
                People also ask
              </Text>
            </Frame>
            <Frame fill-neutral-200 height-px width-fill />
            <Frame alignment-left autolayout-horizontal height-12 width-fill>
              <Frame height-hug width-fill>
                <Text fill-neutral-900 typography-base>
                  Is it puppy's or puppies?
                </Text>
              </Frame>
              <Vector fill-neutral-600 height-6 path={CHEVRON_DOWN_PATH} viewBox="0 0 24 24" width-6 />
            </Frame>
            <Frame fill-neutral-200 height-px width-fill />
            <Frame alignment-left autolayout-horizontal height-12 width-fill>
              <Frame height-hug width-fill>
                <Text fill-neutral-900 typography-base>
                  What is the 3-3-3 rule for puppies?
                </Text>
              </Frame>
              <Vector fill-neutral-600 height-6 path={CHEVRON_DOWN_PATH} viewBox="0 0 24 24" width-6 />
            </Frame>
            <Frame fill-neutral-200 height-px width-fill />
            <Frame alignment-left autolayout-horizontal height-12 width-fill>
              <Frame height-hug width-fill>
                <Text fill-neutral-900 typography-base>
                  What is called puppies?
                </Text>
              </Frame>
              <Vector fill-neutral-600 height-6 path={CHEVRON_DOWN_PATH} viewBox="0 0 24 24" width-6 />
            </Frame>
            <Frame fill-neutral-200 height-px width-fill />
            <Frame alignment-left autolayout-horizontal height-12 width-fill>
              <Frame height-hug width-fill>
                <Text fill-neutral-900 typography-base>
                  How long do puppies sleep a day?
                </Text>
              </Frame>
              <Vector fill-neutral-600 height-6 path={CHEVRON_DOWN_PATH} viewBox="0 0 24 24" width-6 />
            </Frame>
            <Frame fill-neutral-200 height-px width-fill />
            <Frame alignment-right autolayout-horizontal height-hug padding-top-2 width-fill>
              <Text fill-neutral-500 typography-xs>
                Feedback
              </Text>
            </Frame>
          </Frame>

          <Frame autolayout-vertical gap-2 height-hug width-fill>
            <Frame alignment-left autolayout-horizontal gap-3 height-hug width-fill>
              <Frame
                corner-radius-full
                fill-neutral-100
                stroke-neutral-200
                alignment-center
                autolayout-horizontal
                height-7
                width-7
              >
                <Text fill-neutral-900 typography-xs>
                  W
                </Text>
              </Frame>
              <Frame autolayout-vertical height-hug width-fill>
                <Text fill-neutral-900 typography-sm>
                  Wikipedia
                </Text>
                <Text fill-neutral-600 typography-xs>
                  https://en.wikipedia.org &gt; wiki &gt; Puppy
                </Text>
              </Frame>
              <Vector fill-neutral-600 height-4 path={MORE_VERT_PATH} viewBox="0 0 24 24" width-4 />
            </Frame>
            <Text fill-indigo-800 fill-hover-indigo-900 typography-xl>
              Puppy
            </Text>
            <Text fill-neutral-600 typography-sm>
              A puppy is a juvenile dog, generally one less than 12-18 months old. Puppies generally weigh 250-450 grams
              (8-16 oz) shortly after birth, depending on the ...
            </Text>
          </Frame>

          <Frame autolayout-vertical gap-2 height-hug width-fill>
            <Frame alignment-left autolayout-horizontal gap-3 height-hug width-fill>
              <Frame corner-radius-full fill-blue-900 alignment-center autolayout-horizontal height-7 width-7>
                <Text fill-white typography-xs>
                  A
                </Text>
              </Frame>
              <Frame autolayout-vertical height-hug width-fill>
                <Text fill-neutral-900 typography-sm>
                  American Kennel Club
                </Text>
                <Text fill-neutral-600 typography-xs>
                  https://www.akc.org
                </Text>
              </Frame>
              <Vector fill-neutral-600 height-4 path={MORE_VERT_PATH} viewBox="0 0 24 24" width-4 />
            </Frame>
            <Frame autolayout-horizontal gap-4 height-hug width-fill>
              <Frame autolayout-vertical gap-2 height-hug width-fill>
                <Text fill-indigo-800 fill-hover-indigo-900 typography-xl>
                  Puppies: The Ultimate Guide to Ownership
                </Text>
                <Text fill-neutral-600 typography-sm>
                  The AKC Puppy Hub is a one stop shop for everything puppy related - browse guides on how to pick,
                  prepare, and a raise a puppy.
                </Text>
              </Frame>
              <Frame corner-radius-xl fill-amber-100 alignment-bottom-right height-20 padding-1 width-28>
                <Frame corner-radius-md fill-neutral-900 padding-horizontal-1 width-hug>
                  <Text fill-white typography-xs>
                    0:12
                  </Text>
                </Frame>
              </Frame>
            </Frame>
          </Frame>

          <Frame autolayout-vertical gap-2 height-hug width-fill>
            <Frame alignment-left autolayout-horizontal gap-3 height-hug width-fill>
              <Frame corner-radius-full fill-sky-500 alignment-center autolayout-horizontal height-7 width-7>
                <Text fill-white typography-xs>
                  P
                </Text>
              </Frame>
              <Frame autolayout-vertical height-hug width-fill>
                <Text fill-neutral-900 typography-sm>
                  Puppies.com
                </Text>
                <Text fill-neutral-600 typography-xs>
                  https://www.puppies.com
                </Text>
              </Frame>
              <Vector fill-neutral-600 height-4 path={MORE_VERT_PATH} viewBox="0 0 24 24" width-4 />
            </Frame>
            <Text fill-indigo-800 fill-hover-indigo-900 typography-xl>
              Puppies.com - Puppies for Sale from Breeders Nationwide ...
            </Text>
            <Text fill-neutral-600 typography-sm>
              Browse thousands of puppies for sale from breeders across the USA. Search by breed, location and price.
              View photos, health info and contact breeders direct...
            </Text>
          </Frame>

          <Frame autolayout-vertical gap-2 height-hug width-fill>
            <Frame alignment-left autolayout-horizontal gap-3 height-hug width-fill>
              <Frame corner-radius-full fill-orange-600 alignment-center autolayout-horizontal height-7 width-7>
                <Text fill-white typography-xs>
                  S
                </Text>
              </Frame>
              <Frame autolayout-vertical height-hug width-fill>
                <Text fill-neutral-900 typography-sm>
                  ScienceDirect.com
                </Text>
                <Text fill-neutral-600 typography-xs>
                  https://www.sciencedirect.com &gt; topics &gt; puppy
                </Text>
              </Frame>
              <Vector fill-neutral-600 height-4 path={MORE_VERT_PATH} viewBox="0 0 24 24" width-4 />
            </Frame>
            <Text fill-indigo-800 fill-hover-indigo-900 typography-xl>
              Puppy - an overview
            </Text>
            <Text fill-neutral-600 typography-sm>
              Puppies are defined as young domestic dogs that are often affected by human-controlled breeding practices,
              which can impact their health, behavior, and overall ...
            </Text>
          </Frame>

          <Frame autolayout-vertical gap-2 height-hug width-fill>
            <Frame alignment-left autolayout-horizontal gap-3 height-hug width-fill>
              <Frame corner-radius-full fill-pink-500 alignment-center autolayout-horizontal height-7 width-7>
                <Text fill-white typography-xs>
                  I
                </Text>
              </Frame>
              <Frame autolayout-vertical height-hug width-fill>
                <Text fill-neutral-900 typography-sm>
                  Instagram - puppies
                </Text>
                <Text fill-neutral-600 typography-xs>
                  5.4K+ followers
                </Text>
              </Frame>
              <Vector fill-neutral-600 height-4 path={MORE_VERT_PATH} viewBox="0 0 24 24" width-4 />
            </Frame>
            <Text fill-indigo-800 fill-hover-indigo-900 typography-xl>
              Puppies (@puppies) - Instagram photos and videos
            </Text>
            <Text fill-neutral-600 typography-sm>
              5.4K+ followers - 119 following - 174 posts - @puppies: "The Official Puppies Account"
            </Text>
          </Frame>

          <Frame autolayout-vertical gap-2 height-hug width-fill>
            <Frame alignment-left autolayout-horizontal gap-3 height-hug width-fill>
              <Frame corner-radius-full fill-teal-600 alignment-center autolayout-horizontal height-7 width-7>
                <Text fill-white typography-xs>
                  B
                </Text>
              </Frame>
              <Frame autolayout-vertical height-hug width-fill>
                <Text fill-neutral-900 typography-sm>
                  Best Friends Animal Society
                </Text>
                <Text fill-neutral-600 typography-xs>
                  https://bestfriends.org &gt; pet-care-resources &gt; puppy-dev...
                </Text>
              </Frame>
              <Vector fill-neutral-600 height-4 path={MORE_VERT_PATH} viewBox="0 0 24 24" width-4 />
            </Frame>
            <Text fill-indigo-800 fill-hover-indigo-900 typography-xl>
              Puppy Development Stages From Birth to 2 Years Old
            </Text>
            <Text fill-neutral-600 typography-sm>
              Learn about puppy development stages - birth to 2 weeks old, 2-4 weeks, 3-16 weeks, 4-6 months, and 1-2
              years - and what puppies need at each stage.
            </Text>
          </Frame>

          <Frame autolayout-vertical gap-2 height-hug width-fill>
            <Frame alignment-left autolayout-horizontal gap-3 height-hug width-fill>
              <Frame corner-radius-full fill-blue-800 alignment-center autolayout-horizontal height-7 width-7>
                <Text fill-white typography-xs>
                  R
                </Text>
              </Frame>
              <Frame autolayout-vertical height-hug width-fill>
                <Text fill-neutral-900 typography-sm>
                  RSPCA
                </Text>
                <Text fill-neutral-600 typography-xs>
                  https://www.rspca.org.uk &gt; dogs &gt; health &gt; puppycare
                </Text>
              </Frame>
              <Vector fill-neutral-600 height-4 path={MORE_VERT_PATH} viewBox="0 0 24 24" width-4 />
            </Frame>
            <Text fill-indigo-800 fill-hover-indigo-900 typography-xl>
              Caring For Your Puppy - 6 weeks to 12 months
            </Text>
            <Text fill-neutral-600 typography-sm>
              Get ready for your pup's first year with this step-by-step guide to how to care for your new puppy, from
              bringing them home to neutering and puppy classes.
            </Text>
          </Frame>

          <Frame autolayout-vertical gap-4 height-hug width-fill>
            <Text fill-neutral-900 typography-xl>
              People also search for
            </Text>
            <Frame autolayout-horizontal gap-3 height-hug width-fill>
              <Frame
                corner-radius-full
                fill-neutral-100
                fill-hover-neutral-200
                alignment-left
                autolayout-horizontal
                gap-3
                height-12
                padding-horizontal-4
                transition-colors
                width-fill
              >
                <Vector fill-neutral-600 height-5 path={SEARCH_PATH} viewBox="0 0 24 24" width-5 />
                <Text fill-neutral-900 typography-base>
                  Puppies videos
                </Text>
              </Frame>
              <Frame
                corner-radius-full
                fill-neutral-100
                fill-hover-neutral-200
                alignment-left
                autolayout-horizontal
                gap-3
                height-12
                padding-horizontal-4
                transition-colors
                width-fill
              >
                <Vector fill-neutral-600 height-5 path={SEARCH_PATH} viewBox="0 0 24 24" width-5 />
                <Text fill-neutral-900 typography-base>
                  Puppies dog
                </Text>
              </Frame>
            </Frame>
            <Frame autolayout-horizontal gap-3 height-hug width-fill>
              <Frame
                corner-radius-full
                fill-neutral-100
                fill-hover-neutral-200
                alignment-left
                autolayout-horizontal
                gap-3
                height-12
                padding-horizontal-4
                transition-colors
                width-fill
              >
                <Vector fill-neutral-600 height-5 path={SEARCH_PATH} viewBox="0 0 24 24" width-5 />
                <Text fill-neutral-900 typography-base>
                  Puppy's or puppies
                </Text>
              </Frame>
              <Frame
                corner-radius-full
                fill-neutral-100
                fill-hover-neutral-200
                alignment-left
                autolayout-horizontal
                gap-3
                height-12
                padding-horizontal-4
                transition-colors
                width-fill
              >
                <Vector fill-neutral-600 height-5 path={SEARCH_PATH} viewBox="0 0 24 24" width-5 />
                <Text fill-neutral-900 typography-base>
                  Puppies pictures
                </Text>
              </Frame>
            </Frame>
            <Frame autolayout-horizontal gap-3 height-hug width-fill>
              <Frame
                corner-radius-full
                fill-neutral-100
                fill-hover-neutral-200
                alignment-left
                autolayout-horizontal
                gap-3
                height-12
                padding-horizontal-4
                transition-colors
                width-fill
              >
                <Vector fill-neutral-600 height-5 path={SEARCH_PATH} viewBox="0 0 24 24" width-5 />
                <Text fill-neutral-900 typography-base>
                  Puppies store
                </Text>
              </Frame>
              <Frame
                corner-radius-full
                fill-neutral-100
                fill-hover-neutral-200
                alignment-left
                autolayout-horizontal
                gap-3
                height-12
                padding-horizontal-4
                transition-colors
                width-fill
              >
                <Vector fill-neutral-600 height-5 path={SEARCH_PATH} viewBox="0 0 24 24" width-5 />
                <Text fill-neutral-900 typography-base>
                  Puppies spelling
                </Text>
              </Frame>
            </Frame>
          </Frame>

          <Frame alignment-center autolayout-horizontal gap-5 height-hug padding-vertical-4 width-fill>
            <Text fill-neutral-900 typography-sm>
              1
            </Text>
            <Text fill-indigo-800 fill-hover-indigo-900 typography-sm>
              2
            </Text>
            <Text fill-indigo-800 fill-hover-indigo-900 typography-sm>
              3
            </Text>
            <Text fill-indigo-800 fill-hover-indigo-900 typography-sm>
              4
            </Text>
            <Text fill-indigo-800 fill-hover-indigo-900 typography-sm>
              5
            </Text>
            <Text fill-indigo-800 fill-hover-indigo-900 typography-sm>
              6
            </Text>
            <Text fill-indigo-800 fill-hover-indigo-900 typography-sm>
              7
            </Text>
            <Text fill-indigo-800 fill-hover-indigo-900 typography-sm>
              8
            </Text>
            <Text fill-indigo-800 fill-hover-indigo-900 typography-sm>
              9
            </Text>
            <Text fill-indigo-800 fill-hover-indigo-900 typography-sm>
              10
            </Text>
            <Frame alignment-left autolayout-horizontal gap-1 height-hug width-hug>
              <Text fill-indigo-800 fill-hover-indigo-900 typography-sm>
                Next
              </Text>
              <Vector fill-indigo-800 height-4 path={CHEVRON_RIGHT_PATH} viewBox="0 0 24 24" width-4 />
            </Frame>
          </Frame>
        </Frame>

        <Frame autolayout-vertical height-hug padding-left-12 width-md>
          <Frame corner-radius-2xl stroke-neutral-200 autolayout-vertical gap-4 height-hug padding-4 width-fill>
            <Frame autolayout-horizontal gap-1 height-48 width-fill>
              <Frame corner-radius-top-left-xl corner-radius-bottom-left-xl fill-amber-200 height-fill width-fill />
              <Frame autolayout-vertical gap-1 height-fill width-24>
                <Frame corner-radius-top-right-xl fill-orange-100 height-fill width-fill />
                <Frame corner-radius-bottom-right-xl fill-stone-300 height-fill width-fill />
              </Frame>
            </Frame>
            <Frame alignment-left autolayout-horizontal height-hug width-fill>
              <Frame height-hug width-fill>
                <Text fill-neutral-900 typography-3xl>
                  Puppy
                </Text>
              </Frame>
              <Vector fill-neutral-600 height-5 path={MORE_VERT_PATH} viewBox="0 0 24 24" width-5 />
            </Frame>
            <Text fill-neutral-600 typography-sm>
              A puppy is a juvenile dog, generally one less than 12-18 months old. Puppies are markedly underdeveloped
              and dependent on their mothers at birth, but healthy puppies grow quickly and begin walking thereafter.
            </Text>
            <Frame alignment-left autolayout-horizontal gap-1 height-hug width-fill>
              <Text fill-neutral-600 typography-sm>
                Source:
              </Text>
              <Text fill-indigo-800 typography-sm typography-decoration-underline>
                Wikipedia
              </Text>
            </Frame>
            <Frame fill-neutral-200 height-px width-fill />
            <Frame alignment-left autolayout-horizontal gap-1 height-hug width-fill>
              <Text fill-neutral-900 typography-sm>
                Collective noun:
              </Text>
              <Text fill-neutral-600 typography-sm>
                bunch, litter, puddle
              </Text>
            </Frame>
          </Frame>
        </Frame>
      </Frame>

      <Frame fill-neutral-100 autolayout-vertical height-hug width-fill>
        <Frame alignment-left autolayout-horizontal gap-5 height-hug padding-horizontal-7 padding-vertical-4 width-fill>
          <Frame height-hug width-28 />
          <Text fill-neutral-600 typography-sm>
            United States
          </Text>
        </Frame>
        <Frame fill-neutral-200 height-px width-fill />
        <Frame alignment-left autolayout-horizontal gap-5 height-hug padding-horizontal-7 padding-vertical-4 width-fill>
          <Frame height-hug width-28 />
          <Text fill-neutral-600 fill-hover-neutral-900 typography-sm>
            Help
          </Text>
          <Text fill-neutral-600 fill-hover-neutral-900 typography-sm>
            Send feedback
          </Text>
          <Text fill-neutral-600 fill-hover-neutral-900 typography-sm>
            Privacy
          </Text>
          <Text fill-neutral-600 fill-hover-neutral-900 typography-sm>
            Terms
          </Text>
        </Frame>
      </Frame>
    </Frame>
  )
}
