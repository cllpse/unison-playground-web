"use client"

import { Frame, Text, Vector } from "unison-components"

// A look-alike of shadcn/ui's homepage, built only from Frame, Text and Vector flags.

const LOGO_PATH = "M22.2 2.1 2.1 22.2l-1.4-1.4L20.8.7z M21.9 11.9l-9.9 9.9-1.4-1.4 9.9-9.9z"

const GITHUB_PATH =
  "M12 .5C5.73.5.5 5.74.5 12.02c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.53 11.53 0 0 0 23.5 12.02C23.5 5.74 18.27.5 12 .5z"

const THEME_PATH = "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18V4a8 8 0 0 1 0 16z"

const PLUS_PATH = "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"

const ARROW_RIGHT_PATH = "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"

const CHEVRON_DOWN_PATH = "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"

const CHEVRON_RIGHT_PATH = "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"

const MORE_PATH =
  "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"

const SEND_PATH = "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"

export default () => {
  return (
    <Frame fill-white autolayout-vertical height-hug width-fill>
      <Frame alignment-left autolayout-horizontal gap-1 height-16 padding-horizontal-6 width-fill>
        <Frame alignment-center autolayout-horizontal height-8 padding-horizontal-2 width-hug>
          <Vector fill-neutral-900 height-5 path={LOGO_PATH} viewBox="0 0 24 24" width-5 />
        </Frame>
        <Frame
          corner-radius-lg
          fill-hover-neutral-100
          alignment-center
          autolayout-horizontal
          height-8
          padding-horizontal-2p5
          transition-colors
          width-hug
        >
          <Text fill-neutral-900 typography-sm>
            Docs
          </Text>
        </Frame>
        <Frame
          corner-radius-lg
          fill-hover-neutral-100
          alignment-center
          autolayout-horizontal
          height-8
          padding-horizontal-2p5
          transition-colors
          width-hug
        >
          <Text fill-neutral-600 typography-sm>
            Components
          </Text>
        </Frame>
        <Frame
          corner-radius-lg
          fill-hover-neutral-100
          alignment-center
          autolayout-horizontal
          height-8
          padding-horizontal-2p5
          transition-colors
          width-hug
        >
          <Text fill-neutral-600 typography-sm>
            Blocks
          </Text>
        </Frame>
        <Frame
          corner-radius-lg
          fill-hover-neutral-100
          alignment-center
          autolayout-horizontal
          height-8
          padding-horizontal-2p5
          transition-colors
          width-hug
        >
          <Text fill-neutral-600 typography-sm>
            Charts
          </Text>
        </Frame>
        <Frame
          corner-radius-lg
          fill-hover-neutral-100
          alignment-center
          autolayout-horizontal
          height-8
          padding-horizontal-2p5
          transition-colors
          width-hug
        >
          <Text fill-neutral-600 typography-sm>
            Directory
          </Text>
        </Frame>
        <Frame
          corner-radius-lg
          fill-hover-neutral-100
          alignment-center
          autolayout-horizontal
          height-8
          padding-horizontal-2p5
          transition-colors
          width-hug
        >
          <Text fill-neutral-600 typography-sm>
            Typeset
          </Text>
        </Frame>
        <Frame
          corner-radius-lg
          fill-hover-neutral-100
          alignment-center
          autolayout-horizontal
          height-8
          padding-horizontal-2p5
          transition-colors
          width-hug
        >
          <Text fill-neutral-600 typography-sm>
            Create
          </Text>
        </Frame>
        <Frame height-hug width-fill />
        <Frame
          corner-radius-xl
          fill-neutral-100
          fill-hover-neutral-200
          alignment-left
          autolayout-horizontal
          height-8
          padding-left-3
          padding-right-1
          transition-colors
          width-64
        >
          <Frame height-hug width-fill>
            <Text fill-neutral-500 typography-sm>
              Search documentation...
            </Text>
          </Frame>
          <Frame
            corner-radius-md
            fill-white
            stroke-neutral-200
            alignment-center
            autolayout-horizontal
            height-6
            padding-horizontal-1p5
            width-hug
          >
            <Text fill-neutral-500 typography-xs>
              Ctrl K
            </Text>
          </Frame>
        </Frame>
        <Frame
          corner-radius-lg
          fill-hover-neutral-100
          alignment-center
          autolayout-horizontal
          gap-1p5
          height-8
          padding-horizontal-2p5
          transition-colors
          width-hug
        >
          <Vector fill-neutral-900 height-4 path={GITHUB_PATH} viewBox="0 0 24 24" width-4 />
          <Text fill-neutral-500 typography-xs>
            126k
          </Text>
        </Frame>
        <Frame
          corner-radius-lg
          fill-hover-neutral-100
          alignment-center
          autolayout-horizontal
          height-8
          transition-colors
          width-8
        >
          <Vector fill-neutral-900 height-4 path={THEME_PATH} viewBox="0 0 24 24" width-4 />
        </Frame>
        <Frame
          corner-radius-xl
          fill-neutral-900
          fill-hover-neutral-700
          alignment-center
          autolayout-horizontal
          gap-1
          height-8
          padding-horizontal-3
          transition-colors
          width-hug
        >
          <Vector fill-white height-3p5 path={PLUS_PATH} viewBox="0 0 24 24" width-3p5 />
          <Text fill-white typography-xs>
            New
          </Text>
        </Frame>
      </Frame>
      <Frame fill-neutral-200 height-px width-fill />

      <Frame alignment-top-center autolayout-vertical gap-5 height-hug padding-bottom-12 padding-top-20 width-fill>
        <Frame
          corner-radius-full
          fill-neutral-100
          fill-hover-neutral-200
          stroke-neutral-200
          alignment-center
          autolayout-horizontal
          gap-1
          height-6
          padding-horizontal-3
          transition-colors
          width-hug
        >
          <Text fill-neutral-900 typography-xs>
            Trace, Code Block and AI Elements
          </Text>
          <Vector fill-neutral-900 height-3 path={ARROW_RIGHT_PATH} viewBox="0 0 24 24" width-3 />
        </Frame>
        <Text fill-neutral-900 typography-5xl typography-align-center>
          The Foundation for your Design System
        </Text>
        <Frame alignment-top-center height-hug width-3xl>
          <Text fill-neutral-600 typography-lg typography-align-center>
            Composable, accessible components with thoughtful defaults. Build your own component library with code you
            can customize, extend, and make your own.
          </Text>
        </Frame>
        <Frame alignment-center autolayout-horizontal gap-2 height-hug padding-top-2 width-hug>
          <Frame
            corner-radius-full
            fill-neutral-900
            fill-hover-neutral-700
            alignment-center
            autolayout-horizontal
            height-9
            padding-horizontal-4
            transition-colors
            width-hug
          >
            <Text fill-white typography-sm>
              Get Started
            </Text>
          </Frame>
          <Frame
            corner-radius-full
            fill-neutral-100
            fill-hover-neutral-200
            alignment-center
            autolayout-horizontal
            height-9
            padding-horizontal-4
            transition-colors
            width-hug
          >
            <Text fill-neutral-900 typography-sm>
              View Components
            </Text>
          </Frame>
        </Frame>
      </Frame>

      <Frame fill-neutral-100 autolayout-horizontal gap-6 height-hug padding-6 width-fill>
        <Frame autolayout-vertical gap-6 height-hug width-fill>
          <Frame corner-radius-3xl fill-white autolayout-vertical gap-6 height-hug padding-5 width-fill>
            <Frame alignment-left autolayout-horizontal gap-2 height-hug width-fill>
              <Frame
                corner-radius-lg
                fill-neutral-900
                alignment-center
                autolayout-horizontal
                height-8
                padding-horizontal-3
                width-hug
              >
                <Text fill-white typography-sm>
                  Button
                </Text>
              </Frame>
              <Frame
                corner-radius-lg
                fill-neutral-100
                alignment-center
                autolayout-horizontal
                height-8
                padding-horizontal-3
                width-hug
              >
                <Text fill-neutral-900 typography-sm>
                  Secondary
                </Text>
              </Frame>
              <Frame
                corner-radius-lg
                stroke-neutral-200
                alignment-center
                autolayout-horizontal
                height-8
                padding-horizontal-3
                width-hug
              >
                <Text fill-neutral-900 typography-sm>
                  Outline
                </Text>
              </Frame>
            </Frame>
            <Frame corner-radius-xl stroke-neutral-200 autolayout-vertical gap-1 height-hug padding-4 width-fill>
              <Frame alignment-left autolayout-horizontal gap-2 height-hug width-fill>
                <Frame
                  corner-radius-full
                  fill-neutral-900
                  alignment-center
                  autolayout-horizontal
                  padding-horizontal-2
                  padding-vertical-0p5
                  width-hug
                >
                  <Text fill-white typography-xs>
                    Badge
                  </Text>
                </Frame>
                <Frame
                  corner-radius-full
                  fill-neutral-100
                  alignment-center
                  autolayout-horizontal
                  padding-horizontal-2
                  padding-vertical-0p5
                  width-hug
                >
                  <Text fill-neutral-900 typography-xs>
                    Secondary
                  </Text>
                </Frame>
              </Frame>
              <Frame height-2 width-fill />
              <Text fill-neutral-900 typography-sm>
                Alert Dialog
              </Text>
              <Text fill-neutral-500 typography-sm>
                This action cannot be undone. Your account and its data will be removed from our servers.
              </Text>
            </Frame>
            <Frame autolayout-horizontal height-hug width-hug>
              <Frame
                corner-radius-top-left-lg
                corner-radius-bottom-left-lg
                stroke-neutral-200
                alignment-center
                autolayout-horizontal
                height-8
                padding-horizontal-3
                width-hug
              >
                <Text fill-neutral-900 typography-sm>
                  Button Group
                </Text>
              </Frame>
              <Frame stroke-neutral-200 alignment-center autolayout-horizontal height-8 padding-horizontal-3 width-hug>
                <Text fill-neutral-900 typography-sm>
                  Archive
                </Text>
              </Frame>
              <Frame
                corner-radius-top-right-lg
                corner-radius-bottom-right-lg
                stroke-neutral-200
                alignment-center
                autolayout-horizontal
                height-8
                width-8
              >
                <Vector fill-neutral-900 height-4 path={CHEVRON_DOWN_PATH} viewBox="0 0 24 24" width-4 />
              </Frame>
            </Frame>
          </Frame>

          <Frame autolayout-horizontal gap-6 height-hug width-fill>
            <Frame corner-radius-3xl fill-white autolayout-vertical gap-3 height-hug padding-5 width-fill>
              <Text fill-neutral-900 typography-sm>
                Planning
              </Text>
              <Text fill-neutral-500 typography-sm>
                Documents
              </Text>
              <Text fill-neutral-500 typography-sm>
                Budget
              </Text>
              <Text fill-neutral-500 typography-sm>
                Reports
              </Text>
              <Text fill-neutral-500 typography-sm>
                Goals
              </Text>
              <Text fill-neutral-500 typography-sm>
                Calendar
              </Text>
            </Frame>
            <Frame corner-radius-3xl fill-white autolayout-vertical gap-3 height-hug padding-5 width-fill>
              <Text fill-neutral-900 typography-sm>
                Support
              </Text>
              <Text fill-neutral-500 typography-sm>
                Help Center
              </Text>
              <Text fill-neutral-500 typography-sm>
                Docs
              </Text>
              <Text fill-neutral-500 typography-sm>
                Contact Us
              </Text>
              <Text fill-neutral-500 typography-sm>
                Status
              </Text>
              <Text fill-neutral-500 typography-sm>
                Community
              </Text>
            </Frame>
          </Frame>
          <Frame autolayout-horizontal gap-6 height-hug width-fill>
            <Frame corner-radius-3xl fill-white autolayout-vertical gap-3 height-hug padding-5 width-fill>
              <Text fill-neutral-900 typography-sm>
                Overview
              </Text>
              <Text fill-neutral-500 typography-sm>
                Analytics
              </Text>
              <Text fill-neutral-500 typography-sm>
                Transactions
              </Text>
              <Text fill-neutral-500 typography-sm>
                Investments
              </Text>
              <Text fill-neutral-500 typography-sm>
                Accounts
              </Text>
              <Text fill-neutral-500 typography-sm>
                Spending
              </Text>
            </Frame>
            <Frame corner-radius-3xl fill-white autolayout-vertical gap-3 height-hug padding-5 width-fill>
              <Text fill-neutral-900 typography-sm>
                Account
              </Text>
              <Text fill-neutral-500 typography-sm>
                Profile
              </Text>
              <Text fill-neutral-500 typography-sm>
                Billing
              </Text>
              <Text fill-neutral-500 typography-sm>
                Notifications
              </Text>
              <Text fill-neutral-500 typography-sm>
                Security
              </Text>
              <Text fill-neutral-500 typography-sm>
                Appearance
              </Text>
            </Frame>
          </Frame>

          <Frame corner-radius-3xl fill-white autolayout-vertical gap-5 height-hug padding-5 width-fill>
            <Frame autolayout-vertical gap-1p5 height-hug width-fill>
              <Text fill-neutral-900 typography-base>
                Savings Targets
              </Text>
              <Text fill-neutral-500 typography-sm>
                Active milestones for 2024 across your portfolio. Monitor how close you are to each savings goal.
              </Text>
            </Frame>
            <Frame autolayout-vertical gap-2 height-hug width-fill>
              <Frame alignment-left autolayout-horizontal height-hug width-fill>
                <Frame height-hug width-fill>
                  <Text fill-neutral-500 typography-xs>
                    RETIREMENT
                  </Text>
                </Frame>
                <Frame height-hug width-hug>
                  <Text fill-neutral-900 typography-sm>
                    $420,000
                  </Text>
                </Frame>
              </Frame>
              <Frame corner-radius-full fill-neutral-100 height-2 width-fill>
                <Frame corner-radius-full fill-neutral-900 height-2 width-48 />
              </Frame>
              <Frame alignment-left autolayout-horizontal height-hug width-fill>
                <Frame height-hug width-fill>
                  <Text fill-neutral-500 typography-xs>
                    65% achieved
                  </Text>
                </Frame>
                <Frame height-hug width-hug>
                  <Text fill-neutral-500 typography-xs>
                    $273,000
                  </Text>
                </Frame>
              </Frame>
            </Frame>
            <Frame autolayout-vertical gap-2 height-hug width-fill>
              <Frame alignment-left autolayout-horizontal height-hug width-fill>
                <Frame height-hug width-fill>
                  <Text fill-neutral-500 typography-xs>
                    REAL ESTATE
                  </Text>
                </Frame>
                <Frame height-hug width-hug>
                  <Text fill-neutral-900 typography-sm>
                    $85,000
                  </Text>
                </Frame>
              </Frame>
              <Frame corner-radius-full fill-neutral-100 height-2 width-fill>
                <Frame corner-radius-full fill-neutral-900 height-2 width-24 />
              </Frame>
              <Frame alignment-left autolayout-horizontal height-hug width-fill>
                <Frame height-hug width-fill>
                  <Text fill-neutral-500 typography-xs>
                    32% achieved
                  </Text>
                </Frame>
                <Frame height-hug width-hug>
                  <Text fill-neutral-500 typography-xs>
                    $27,200
                  </Text>
                </Frame>
              </Frame>
            </Frame>
            <Frame height-hug width-hug>
              <Text fill-neutral-500 typography-sm>
                You have not met your targets for this year.
              </Text>
            </Frame>
          </Frame>
        </Frame>

        <Frame autolayout-vertical gap-6 height-hug width-fill>
          <Frame corner-radius-3xl fill-white autolayout-vertical gap-5 height-hug padding-5 width-fill>
            <Frame autolayout-vertical gap-1p5 height-hug width-fill>
              <Text fill-neutral-900 typography-base>
                Contribution History
              </Text>
              <Text fill-neutral-500 typography-sm>
                Last 6 months of activity
              </Text>
            </Frame>
            <Frame alignment-bottom-left autolayout-horizontal gap-3 height-44 width-fill>
              <Frame corner-radius-md fill-neutral-300 height-20 width-fill />
              <Frame corner-radius-md fill-neutral-300 height-28 width-fill />
              <Frame corner-radius-md fill-neutral-300 height-24 width-fill />
              <Frame corner-radius-md fill-neutral-300 height-36 width-fill />
              <Frame corner-radius-md fill-neutral-900 height-40 width-fill />
            </Frame>
            <Frame autolayout-horizontal gap-3 height-hug width-fill>
              <Frame alignment-top-center height-hug width-fill>
                <Text fill-neutral-500 typography-xs>
                  Dec
                </Text>
              </Frame>
              <Frame alignment-top-center height-hug width-fill>
                <Text fill-neutral-500 typography-xs>
                  Jan
                </Text>
              </Frame>
              <Frame alignment-top-center height-hug width-fill>
                <Text fill-neutral-500 typography-xs>
                  Feb
                </Text>
              </Frame>
              <Frame alignment-top-center height-hug width-fill>
                <Text fill-neutral-500 typography-xs>
                  Mar
                </Text>
              </Frame>
              <Frame alignment-top-center height-hug width-fill>
                <Text fill-neutral-900 typography-xs>
                  Apr
                </Text>
              </Frame>
            </Frame>
            <Frame autolayout-vertical gap-3 height-hug width-fill>
              <Frame alignment-left autolayout-horizontal height-hug width-fill>
                <Frame autolayout-vertical gap-0p5 height-hug width-fill>
                  <Text fill-neutral-500 typography-xs>
                    UPCOMING
                  </Text>
                  <Text fill-neutral-900 typography-sm>
                    May 2024
                  </Text>
                </Frame>
                <Frame
                  corner-radius-full
                  fill-neutral-100
                  alignment-center
                  autolayout-horizontal
                  padding-horizontal-2
                  padding-vertical-0p5
                  width-hug
                >
                  <Text fill-neutral-900 typography-xs>
                    Scheduled
                  </Text>
                </Frame>
              </Frame>
              <Frame alignment-left autolayout-horizontal height-hug width-fill>
                <Frame autolayout-vertical gap-0p5 height-hug width-fill>
                  <Text fill-neutral-500 typography-xs>
                    SAVINGS PLAN
                  </Text>
                  <Text fill-neutral-900 typography-sm>
                    Accelerated
                  </Text>
                </Frame>
                <Frame
                  corner-radius-full
                  stroke-neutral-200
                  alignment-center
                  autolayout-horizontal
                  padding-horizontal-2
                  padding-vertical-0p5
                  width-hug
                >
                  <Text fill-neutral-900 typography-xs>
                    Recurring
                  </Text>
                </Frame>
              </Frame>
            </Frame>
            <Frame
              corner-radius-2xl
              fill-neutral-900
              fill-hover-neutral-700
              alignment-center
              autolayout-horizontal
              height-8
              transition-colors
              width-fill
            >
              <Text fill-white typography-sm>
                View Full Report
              </Text>
            </Frame>
          </Frame>

          <Frame corner-radius-3xl fill-white autolayout-vertical gap-5 height-hug padding-5 width-fill>
            <Frame autolayout-vertical gap-1p5 height-hug width-fill>
              <Text fill-neutral-500 typography-sm>
                Claimable Balance
              </Text>
              <Text fill-neutral-900 typography-4xl>
                $1,211.29
              </Text>
              <Frame
                corner-radius-full
                stroke-neutral-200
                alignment-center
                autolayout-horizontal
                padding-horizontal-2
                padding-vertical-0p5
                width-hug
              >
                <Text fill-neutral-900 typography-xs>
                  Pending Setup
                </Text>
              </Frame>
            </Frame>
            <Frame
              corner-radius-2xl
              fill-neutral-50
              stroke-neutral-200
              autolayout-vertical
              gap-2
              height-hug
              padding-4
              width-fill
            >
              <Frame autolayout-horizontal height-hug width-fill>
                <Frame height-hug width-fill>
                  <Text fill-neutral-500 typography-sm>
                    Net Royalties
                  </Text>
                </Frame>
                <Frame height-hug width-hug>
                  <Text fill-neutral-900 typography-sm>
                    $1,248.75
                  </Text>
                </Frame>
              </Frame>
              <Frame autolayout-horizontal height-hug width-fill>
                <Frame height-hug width-fill>
                  <Text fill-neutral-500 typography-sm>
                    Processing Fee
                  </Text>
                </Frame>
                <Frame height-hug width-hug>
                  <Text fill-neutral-900 typography-sm>
                    -$37.46
                  </Text>
                </Frame>
              </Frame>
              <Frame fill-neutral-200 height-px width-fill />
              <Frame autolayout-horizontal height-hug width-fill>
                <Frame height-hug width-fill>
                  <Text fill-neutral-900 typography-sm>
                    Total Ready to Claim
                  </Text>
                </Frame>
                <Frame height-hug width-hug>
                  <Text fill-neutral-900 typography-sm>
                    $1,211.29 USD
                  </Text>
                </Frame>
              </Frame>
            </Frame>
            <Text fill-neutral-500 typography-sm>
              Once your bank is connected, balances over $10.00 are automatically eligible for monthly distribution on
              the 15th of each month.
            </Text>
          </Frame>

          <Frame corner-radius-3xl fill-white autolayout-vertical gap-5 height-hug padding-5 width-fill>
            <Frame autolayout-horizontal gap-3 height-hug width-fill>
              <Frame autolayout-vertical gap-1p5 height-hug width-fill>
                <Text fill-neutral-900 typography-base>
                  Q2 Dividend Income
                </Text>
                <Text fill-neutral-500 typography-sm>
                  Quarterly dividend payouts across your portfolio holdings.
                </Text>
              </Frame>
              <Frame
                corner-radius-lg
                fill-hover-neutral-100
                alignment-center
                autolayout-horizontal
                height-7
                transition-colors
                width-7
              >
                <Vector fill-neutral-900 height-4 path={MORE_PATH} viewBox="0 0 24 24" width-4 />
              </Frame>
            </Frame>
            <Frame autolayout-vertical gap-4 height-hug width-fill>
              <Frame alignment-left autolayout-horizontal gap-3 height-hug width-fill>
                <Frame corner-radius-full fill-red-700 height-9 width-9 />
                <Frame height-hug width-fill>
                  <Text fill-neutral-900 typography-sm>
                    Vanguard
                  </Text>
                </Frame>
                <Frame height-hug width-hug>
                  <Text fill-neutral-500 typography-sm>
                    450 Shares
                  </Text>
                </Frame>
              </Frame>
              <Frame alignment-left autolayout-horizontal gap-3 height-hug width-fill>
                <Frame corner-radius-full fill-blue-600 height-9 width-9 />
                <Frame autolayout-vertical height-hug width-fill>
                  <Text fill-neutral-900 typography-sm>
                    {"S&P 500"}
                  </Text>
                  <Text fill-neutral-500 typography-xs>
                    VOO
                  </Text>
                </Frame>
                <Frame height-hug width-hug>
                  <Text fill-neutral-500 typography-sm>
                    112 Shares
                  </Text>
                </Frame>
              </Frame>
              <Frame alignment-left autolayout-horizontal gap-3 height-hug width-fill>
                <Frame corner-radius-full fill-neutral-900 height-9 width-9 />
                <Frame autolayout-vertical height-hug width-fill>
                  <Text fill-neutral-900 typography-sm>
                    Apple
                  </Text>
                  <Text fill-neutral-500 typography-xs>
                    AAPL
                  </Text>
                </Frame>
                <Frame height-hug width-hug>
                  <Text fill-neutral-500 typography-sm>
                    85 Shares
                  </Text>
                </Frame>
              </Frame>
              <Frame alignment-left autolayout-horizontal gap-3 height-hug width-fill>
                <Frame corner-radius-full fill-sky-600 height-9 width-9 />
                <Frame height-hug width-fill>
                  <Text fill-neutral-900 typography-sm>
                    Realty Income
                  </Text>
                </Frame>
                <Frame height-hug width-hug>
                  <Text fill-neutral-500 typography-sm>
                    320 Shares
                  </Text>
                </Frame>
              </Frame>
            </Frame>
          </Frame>
        </Frame>

        <Frame autolayout-vertical gap-6 height-hug width-fill>
          <Frame corner-radius-3xl fill-white autolayout-vertical gap-5 height-hug padding-5 width-fill>
            <Frame autolayout-vertical gap-1p5 height-hug width-fill>
              <Text fill-neutral-900 typography-base>
                Set a new milestone
              </Text>
              <Text fill-neutral-500 typography-sm>
                Define your financial target and we'll help you pace your savings.
              </Text>
            </Frame>
            <Frame autolayout-vertical gap-2 height-hug width-fill>
              <Text fill-neutral-900 typography-sm>
                Goal Name
              </Text>
              <Frame
                corner-radius-lg
                stroke-neutral-200
                alignment-left
                autolayout-horizontal
                height-9
                padding-horizontal-3
                width-fill
              >
                <Text fill-neutral-400 typography-sm>
                  Emergency fund
                </Text>
              </Frame>
            </Frame>
            <Frame autolayout-horizontal gap-3 height-hug width-fill>
              <Frame autolayout-vertical gap-2 height-hug width-fill>
                <Text fill-neutral-900 typography-sm>
                  Target Amount
                </Text>
                <Frame
                  corner-radius-lg
                  stroke-neutral-200
                  alignment-left
                  autolayout-horizontal
                  height-9
                  padding-horizontal-3
                  width-fill
                >
                  <Text fill-neutral-400 typography-sm>
                    $10,000
                  </Text>
                </Frame>
              </Frame>
              <Frame autolayout-vertical gap-2 height-hug width-fill>
                <Text fill-neutral-900 typography-sm>
                  Target Date
                </Text>
                <Frame
                  corner-radius-lg
                  stroke-neutral-200
                  alignment-left
                  autolayout-horizontal
                  height-9
                  padding-horizontal-3
                  width-fill
                >
                  <Text fill-neutral-400 typography-sm>
                    Dec 2025
                  </Text>
                </Frame>
              </Frame>
            </Frame>
            <Frame autolayout-vertical gap-2 height-hug width-fill>
              <Frame
                corner-radius-2xl
                fill-neutral-900
                fill-hover-neutral-700
                alignment-center
                autolayout-horizontal
                height-8
                transition-colors
                width-fill
              >
                <Text fill-white typography-sm>
                  Create Goal
                </Text>
              </Frame>
              <Frame
                corner-radius-2xl
                stroke-neutral-200
                fill-hover-neutral-100
                alignment-center
                autolayout-horizontal
                height-8
                transition-colors
                width-fill
              >
                <Text fill-neutral-900 typography-sm>
                  Cancel
                </Text>
              </Frame>
            </Frame>
          </Frame>

          <Frame corner-radius-3xl fill-white autolayout-vertical gap-5 height-hug padding-5 width-fill>
            <Frame autolayout-horizontal gap-3 height-hug width-fill>
              <Frame autolayout-vertical gap-1p5 height-hug width-fill>
                <Text fill-neutral-900 typography-base>
                  Payout Threshold
                </Text>
                <Text fill-neutral-500 typography-sm>
                  Set the minimum balance required before a payout is triggered.
                </Text>
              </Frame>
              <Frame
                corner-radius-lg
                fill-hover-neutral-100
                alignment-center
                autolayout-horizontal
                height-7
                transition-colors
                width-7
              >
                <Vector fill-neutral-900 height-4 path={MORE_PATH} viewBox="0 0 24 24" width-4 />
              </Frame>
            </Frame>
            <Frame autolayout-vertical gap-2 height-hug width-fill>
              <Text fill-neutral-900 typography-sm>
                Preferred Currency
              </Text>
              <Frame
                corner-radius-lg
                stroke-neutral-200
                alignment-left
                autolayout-horizontal
                height-9
                padding-horizontal-3
                width-fill
              >
                <Frame height-hug width-fill>
                  <Text fill-neutral-900 typography-sm>
                    USD - United States Dollar
                  </Text>
                </Frame>
                <Vector fill-neutral-500 height-4 path={CHEVRON_DOWN_PATH} viewBox="0 0 24 24" width-4 />
              </Frame>
            </Frame>
            <Frame autolayout-vertical gap-3 height-hug width-fill>
              <Frame autolayout-horizontal height-hug width-fill>
                <Frame height-hug width-fill>
                  <Text fill-neutral-900 typography-sm>
                    Minimum Payout Amount
                  </Text>
                </Frame>
                <Frame height-hug width-hug>
                  <Text fill-neutral-900 typography-sm>
                    $2500.00
                  </Text>
                </Frame>
              </Frame>
              <Frame alignment-left autolayout-horizontal height-4 width-fill>
                <Frame corner-radius-full fill-neutral-900 height-1p5 width-20 />
                <Frame corner-radius-full fill-white stroke-neutral-900 effect-shadow-sm height-4 width-4 />
                <Frame corner-radius-full fill-neutral-100 height-1p5 width-fill />
              </Frame>
              <Frame autolayout-horizontal height-hug width-fill>
                <Frame height-hug width-fill>
                  <Text fill-neutral-500 typography-xs>
                    $50 (MIN)
                  </Text>
                </Frame>
                <Frame height-hug width-hug>
                  <Text fill-neutral-500 typography-xs>
                    $10,000 (MAX)
                  </Text>
                </Frame>
              </Frame>
            </Frame>
            <Frame autolayout-vertical gap-2 height-hug width-fill>
              <Text fill-neutral-900 typography-sm>
                Notes
              </Text>
              <Frame corner-radius-lg stroke-neutral-200 height-20 padding-horizontal-3 padding-vertical-2 width-fill>
                <Text fill-neutral-400 typography-sm>
                  Add a note for your accountant...
                </Text>
              </Frame>
            </Frame>
            <Frame
              corner-radius-2xl
              fill-neutral-900
              fill-hover-neutral-700
              alignment-center
              autolayout-horizontal
              height-8
              transition-colors
              width-fill
            >
              <Text fill-white typography-sm>
                Save Threshold
              </Text>
            </Frame>
          </Frame>

          <Frame corner-radius-3xl fill-white autolayout-vertical gap-5 height-hug padding-5 width-fill>
            <Frame autolayout-vertical gap-1p5 height-hug width-fill>
              <Text fill-neutral-900 typography-base>
                Account Access
              </Text>
              <Text fill-neutral-500 typography-sm>
                Update your credentials or re-authenticate.
              </Text>
            </Frame>
            <Frame autolayout-vertical gap-2 height-hug width-fill>
              <Text fill-neutral-900 typography-sm>
                Email Address
              </Text>
              <Frame
                corner-radius-lg
                stroke-neutral-200
                alignment-left
                autolayout-horizontal
                height-9
                padding-horizontal-3
                width-fill
              >
                <Text fill-neutral-900 typography-sm>
                  m@example.com
                </Text>
              </Frame>
            </Frame>
            <Frame autolayout-vertical gap-2 height-hug width-fill>
              <Frame autolayout-horizontal height-hug width-fill>
                <Frame height-hug width-fill>
                  <Text fill-neutral-900 typography-sm>
                    Current Password
                  </Text>
                </Frame>
                <Frame height-hug width-hug>
                  <Text fill-neutral-500 fill-hover-neutral-900 typography-xs>
                    FORGOT?
                  </Text>
                </Frame>
              </Frame>
              <Frame
                corner-radius-lg
                stroke-neutral-200
                alignment-left
                autolayout-horizontal
                height-9
                padding-horizontal-3
                width-fill
              >
                <Text fill-neutral-900 typography-sm>
                  ************
                </Text>
              </Frame>
            </Frame>
            <Frame
              corner-radius-2xl
              fill-neutral-900
              fill-hover-neutral-700
              alignment-center
              autolayout-horizontal
              height-8
              transition-colors
              width-fill
            >
              <Text fill-white typography-sm>
                Update Security
              </Text>
            </Frame>
            <Frame
              corner-radius-2xl
              fill-neutral-50
              stroke-neutral-200
              autolayout-vertical
              gap-1
              height-hug
              padding-4
              width-fill
            >
              <Text fill-red-600 typography-sm>
                Danger Zone
              </Text>
              <Text fill-neutral-500 typography-sm>
                Archive account and remove catalog
              </Text>
            </Frame>
          </Frame>
        </Frame>

        <Frame autolayout-vertical gap-6 height-hug width-fill>
          <Frame corner-radius-3xl fill-white autolayout-vertical gap-5 height-hug padding-5 width-fill>
            <Frame alignment-top-center height-hug padding-top-1 width-fill>
              <Frame
                corner-radius-xl
                fill-white
                stroke-neutral-200
                autolayout-vertical
                gap-2
                height-48
                padding-4
                width-48
              >
                <Frame autolayout-horizontal gap-2 height-fill width-fill>
                  <Frame corner-radius-md fill-neutral-900 height-12 width-12 />
                  <Frame corner-radius-xs fill-neutral-900 height-4 width-4 />
                  <Frame height-hug width-fill />
                  <Frame corner-radius-md fill-neutral-900 height-12 width-12 />
                </Frame>
                <Frame alignment-center autolayout-horizontal gap-2 height-fill width-fill>
                  <Frame corner-radius-xs fill-neutral-900 height-4 width-4 />
                  <Frame corner-radius-xs fill-neutral-900 height-4 width-8 />
                  <Frame corner-radius-xs fill-neutral-900 height-8 width-4 />
                  <Frame corner-radius-xs fill-neutral-900 height-4 width-4 />
                </Frame>
                <Frame alignment-bottom-left autolayout-horizontal gap-2 height-fill width-fill>
                  <Frame corner-radius-md fill-neutral-900 height-12 width-12 />
                  <Frame corner-radius-xs fill-neutral-900 height-8 width-4 />
                  <Frame corner-radius-xs fill-neutral-900 height-4 width-8 />
                  <Frame corner-radius-xs fill-neutral-900 height-4 width-4 />
                </Frame>
              </Frame>
            </Frame>
            <Frame autolayout-vertical gap-1p5 height-hug width-fill>
              <Text fill-neutral-900 typography-base>
                Scan to connect your mobile device
              </Text>
              <Text fill-neutral-500 typography-sm>
                Open the Ledger mobile app and scan this code to link your device.
              </Text>
            </Frame>
          </Frame>

          <Frame corner-radius-3xl fill-white autolayout-vertical gap-4 height-hug padding-5 width-fill>
            <Frame alignment-left autolayout-horizontal height-hug width-fill>
              <Frame height-hug width-fill>
                <Text fill-neutral-900 typography-sm>
                  New Chat
                </Text>
              </Frame>
              <Frame
                corner-radius-lg
                fill-hover-neutral-100
                alignment-center
                autolayout-horizontal
                height-7
                transition-colors
                width-7
              >
                <Vector fill-neutral-900 height-4 path={PLUS_PATH} viewBox="0 0 24 24" width-4 />
              </Frame>
            </Frame>
            <Frame fill-neutral-200 height-px width-fill />
            <Frame alignment-top-center autolayout-vertical gap-1 height-hug padding-vertical-4 width-fill>
              <Text fill-neutral-900 typography-lg typography-align-center>
                Morning, shadcn!
              </Text>
              <Text fill-neutral-500 typography-sm typography-align-center>
                What are we working on today?
              </Text>
            </Frame>
            <Frame alignment-top-right height-hug width-fill>
              <Frame corner-radius-2xl fill-neutral-100 height-hug padding-horizontal-3 padding-vertical-2 width-60>
                <Text fill-neutral-900 typography-sm>
                  I'm building a chat for our app and the scroll behavior is driving me nuts. Every time the AI streams
                  a reply, the whole thread jumps around.
                </Text>
              </Frame>
            </Frame>
            <Frame autolayout-vertical gap-1p5 height-hug width-fill>
              <Frame corner-radius-full fill-neutral-200 animate-pulse height-2 width-full />
              <Frame corner-radius-full fill-neutral-200 animate-pulse height-2 width-48 />
              <Frame corner-radius-full fill-neutral-200 animate-pulse height-2 width-32 />
            </Frame>
            <Frame corner-radius-2xl stroke-neutral-200 autolayout-vertical gap-3 height-hug padding-3 width-fill>
              <Text fill-neutral-400 typography-sm>
                How can I help you today?
              </Text>
              <Frame alignment-left autolayout-horizontal height-hug width-fill>
                <Frame height-hug width-fill>
                  <Text fill-neutral-400 typography-xs>
                    Press send to start a new conversation
                  </Text>
                </Frame>
                <Frame
                  corner-radius-full
                  fill-neutral-900
                  fill-hover-neutral-700
                  alignment-center
                  autolayout-horizontal
                  height-7
                  transition-colors
                  width-7
                >
                  <Vector fill-white height-3p5 path={SEND_PATH} viewBox="0 0 24 24" width-3p5 />
                </Frame>
              </Frame>
            </Frame>
          </Frame>

          <Frame corner-radius-3xl fill-white autolayout-vertical gap-4 height-hug padding-5 width-fill>
            <Frame alignment-left autolayout-horizontal gap-1p5 height-hug width-fill>
              <Text fill-neutral-500 typography-sm>
                Home
              </Text>
              <Vector fill-neutral-400 height-3p5 path={CHEVRON_RIGHT_PATH} viewBox="0 0 24 24" width-3p5 />
              <Text fill-neutral-500 typography-sm>
                Account options
              </Text>
              <Vector fill-neutral-400 height-3p5 path={CHEVRON_RIGHT_PATH} viewBox="0 0 24 24" width-3p5 />
              <Text fill-neutral-900 typography-sm>
                Payments
              </Text>
            </Frame>
            <Frame corner-radius-2xl stroke-neutral-200 autolayout-vertical height-hug width-fill>
              <Frame
                fill-hover-neutral-50
                alignment-left
                autolayout-horizontal
                gap-3
                height-hug
                padding-4
                transition-colors
                width-fill
              >
                <Frame autolayout-vertical gap-0p5 height-hug width-fill>
                  <Text fill-neutral-900 typography-sm>
                    Change transfer limit
                  </Text>
                  <Text fill-neutral-500 typography-xs>
                    Adjust how much you can send from your balance.
                  </Text>
                </Frame>
                <Vector fill-neutral-400 height-4 path={CHEVRON_RIGHT_PATH} viewBox="0 0 24 24" width-4 />
              </Frame>
              <Frame fill-neutral-200 height-px width-fill />
              <Frame
                fill-hover-neutral-50
                alignment-left
                autolayout-horizontal
                gap-3
                height-hug
                padding-4
                transition-colors
                width-fill
              >
                <Frame autolayout-vertical gap-0p5 height-hug width-fill>
                  <Text fill-neutral-900 typography-sm>
                    Scheduled transfers
                  </Text>
                  <Text fill-neutral-500 typography-xs>
                    Set up a transfer to send at a later date.
                  </Text>
                </Frame>
                <Vector fill-neutral-400 height-4 path={CHEVRON_RIGHT_PATH} viewBox="0 0 24 24" width-4 />
              </Frame>
              <Frame fill-neutral-200 height-px width-fill />
              <Frame
                fill-hover-neutral-50
                alignment-left
                autolayout-horizontal
                gap-3
                height-hug
                padding-4
                transition-colors
                width-fill
              >
                <Frame autolayout-vertical gap-0p5 height-hug width-fill>
                  <Text fill-neutral-900 typography-sm>
                    Recurring card payments
                  </Text>
                  <Text fill-neutral-500 typography-xs>
                    Manage your repeated card transactions.
                  </Text>
                </Frame>
                <Vector fill-neutral-400 height-4 path={CHEVRON_RIGHT_PATH} viewBox="0 0 24 24" width-4 />
              </Frame>
            </Frame>
          </Frame>
        </Frame>
      </Frame>
    </Frame>
  )
}
