import Link from "next/link";
import styled from "styled-components";

import Button from "../components/Button";
import {
  ButtonPrimaryGroup,
  ButtonSecondaryGroup,
  ButtonOutlineGroup
} from "../components/ButtonGroup";
import {
  CardContainer,
  CreamCardContainer,
  DarkCardContainer
} from "../components/CardContainer";
import {
  TextDisplayLarge,
  TextDisplayLargeSubdued,
  TextDisplayLargeWhite,
  TextDisplaySmall,
  TextDisplaySmallSubdued,
  TextDisplaySmallWhite,
  TextHeadingFeature,
  TextHeadingFeatureSubdued,
  TextHeadingFeatureWhite,
  TextHeadingPrimary,
  TextHeadingPrimarySubdued,
  TextHeadingPrimaryWhite,
  TextSubheadingFeature,
  TextSubheadingFeatureSubdued,
  TextSubheadingFeatureWhite,
  TextSubheadingPrimary,
  TextSubheadingPrimarySubdued,
  TextSubheadingPrimaryWhite,
  TextBodyFeature,
  TextBodyFeatureSubdued,
  TextBodyFeatureWhite,
  TextBodyPrimary,
  TextBodyPrimarySubdued,
  TextBodyPrimaryWhite,
  TextCaptionFeature,
  TextCaptionFeatureSubdued,
  TextCaptionFeatureWhite,
  TextCaptionPrimary,
  TextCaptionPrimarySubdued,
  TextCaptionPrimaryWhite
} from "../components/Typography";
import { BREAKPOINTS, GRID } from "../components/styles/Layout";
import TextField from "../components/TextField";
import TextArea from "../components/TextArea";
import TextFieldInput from "../components/TextFieldInput";
import TextAreaInput from "../components/TextAreaInput";
import THEME from "../components/styles/Theme";

const Wrapper = styled.div`
  ${GRID.wrapper}
`;

const Container = styled.div`
  ${GRID.container}
`;

const Section = styled.div`
  /* margin: 2rem 0 4rem; */
  grid-column: span 12;

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    grid-column: span 8;
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    grid-column: span 4;
  }
`;

const ColorBlockWrapper = styled.div`
  grid-column: span 4;
`;

const ColorBlockContainer = styled(CardContainer)`
  padding: 0;
  border: none;
`;

const ColorBlock = styled.div`
  background: ${props =>
    props.displayColor ? props.displayColor : props.theme.color.gray.white};
  padding: 1rem;
`;

const ColorName = styled(TextBodyPrimary)`
  color: ${props => (props.white ? props.theme.color.gray.white : null)};
  display: inline-block;
  margin: 0;
`;

const ColorCode = styled(ColorName)`
  float: right;
`;

const Home = props => (
  <>
    <Wrapper>
      <Container>
        <Section>
          <TextSubheadingPrimarySubdued>Buttons</TextSubheadingPrimarySubdued>

          {/* <ButtonPrimary>Primary</ButtonPrimary>
          <ButtonSecondary>Secondary</ButtonSecondary>
          <ButtonOutline>Outline</ButtonOutline>
          <ButtonDanger>Danger</ButtonDanger> */}
          <Button buttonType="primary">Primary</Button>
          <Button buttonType="secondary">Secondary</Button>
          <Button buttonType="outline">Outline</Button>
          <Button buttonType="danger">Danger</Button>
        </Section>

        <Section>
          <TextSubheadingPrimarySubdued>
            Grouped Buttons
          </TextSubheadingPrimarySubdued>

          <ButtonPrimaryGroup>
            <Button buttonType="primary">Left</Button>
            <Button buttonType="primary">Primary</Button>
            <Button buttonType="primary">Right</Button>
          </ButtonPrimaryGroup>
          <ButtonSecondaryGroup>
            <Button buttonType="secondary">Left</Button>
            <Button buttonType="secondary">Secondary</Button>
            <Button buttonType="secondary">Right</Button>
          </ButtonSecondaryGroup>
          <ButtonOutlineGroup>
            <Button buttonType="outline">Left</Button>
            <Button buttonType="outline">Outline</Button>
            <Button buttonType="outline">Right</Button>
          </ButtonOutlineGroup>
        </Section>

        <Section>
          <TextSubheadingPrimarySubdued>
            Pagination
          </TextSubheadingPrimarySubdued>
          <Button buttonType="outline">← Back</Button>
          <Button buttonType="outline">Next →</Button>
        </Section>

        <Section>
          <TextSubheadingPrimarySubdued>
            Simple Inputs
          </TextSubheadingPrimarySubdued>

          <TextField label="Primary" textFieldType="primary" />
          <TextField label="Secondary" textFieldType="secondary" />
          <TextField label="Outline" textFieldType="outline" />
          <TextField label="Danger" textFieldType="danger" />

          <TextArea label="Primary" textAreaType="primary" />
          <TextArea label="Secondary" textAreaType="secondary" />
          <TextArea label="Outline" textAreaType="outline" />
          <TextArea label="Danger" textAreaType="danger" />
        </Section>

        <Section>
          <TextSubheadingPrimarySubdued>
            Card Containers
          </TextSubheadingPrimarySubdued>

          <CardContainer>
            <TextSubheadingPrimarySubdued>
              Card Containers
            </TextSubheadingPrimarySubdued>
            <TextBodyPrimary>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis
              aliquam ut porttitor leo a diam sollicitudin tempor. Faucibus in
              ornare quam viverra. Ultricies mi quis hendrerit dolor magna eget
              est lorem ipsum. Auctor urna nunc id cursus. Nascetur ridiculus
              mus mauris vitae ultricies. Quam elementum pulvinar etiam non quam
              lacus suspendisse faucibus interdum. Convallis tellus id interdum
              velit laoreet id. Pharetra massa massa ultricies mi quis hendrerit
              dolor. Neque ornare aenean euismod elementum. Ullamcorper velit
              sed ullamcorper morbi tincidunt ornare massa eget. Scelerisque
              felis imperdiet proin fermentum. Justo donec enim diam vulputate
              ut. In eu mi bibendum neque egestas congue quisque egestas. Sapien
              eget mi proin sed. Dictumst vestibulum rhoncus est pellentesque
              elit.
            </TextBodyPrimary>
          </CardContainer>
          <DarkCardContainer>
            <TextSubheadingPrimaryWhite>
              Card Containers
            </TextSubheadingPrimaryWhite>
            <TextBodyPrimaryWhite>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis
              aliquam ut porttitor leo a diam sollicitudin tempor. Faucibus in
              ornare quam viverra. Ultricies mi quis hendrerit dolor magna eget
              est lorem ipsum. Auctor urna nunc id cursus. Nascetur ridiculus
              mus mauris vitae ultricies. Quam elementum pulvinar etiam non quam
              lacus suspendisse faucibus interdum. Convallis tellus id interdum
              velit laoreet id. Pharetra massa massa ultricies mi quis hendrerit
              dolor. Neque ornare aenean euismod elementum. Ullamcorper velit
              sed ullamcorper morbi tincidunt ornare massa eget. Scelerisque
              felis imperdiet proin fermentum. Justo donec enim diam vulputate
              ut. In eu mi bibendum neque egestas congue quisque egestas. Sapien
              eget mi proin sed. Dictumst vestibulum rhoncus est pellentesque
              elit.
            </TextBodyPrimaryWhite>
          </DarkCardContainer>
        </Section>

        <Section>
          <TextSubheadingPrimarySubdued>
            Typography
          </TextSubheadingPrimarySubdued>

          <CardContainer>
            <TextSubheadingPrimarySubdued>
              Ink on White
            </TextSubheadingPrimarySubdued>

            <TextDisplayLarge>
              Display-Large / Crimson Text / SemiBold - 54px / 81px
            </TextDisplayLarge>
            <TextDisplaySmall>
              Display-Small / Crimson Text / SemiBold - 36px / 54px
            </TextDisplaySmall>
            <TextHeadingFeature>
              Heading / Crimson Text / Bold - 24px / 36px
            </TextHeadingFeature>
            <TextHeadingPrimary>
              Heading / Lato / Bold - 24px / 36px
            </TextHeadingPrimary>
            <TextSubheadingFeature>
              Subheading / Crimson Text / Bold - 16px / 24px
            </TextSubheadingFeature>
            <TextSubheadingPrimary>
              SUBHEADING / LATO / BOLD - 16PX / 24PX
            </TextSubheadingPrimary>
            <TextBodyFeature>
              Body / Crimson Text / Regular - 16px / 24px
            </TextBodyFeature>
            <TextBodyPrimary>
              Body / Lato / Regular - 16px / 24px
            </TextBodyPrimary>
            <TextCaptionFeature>
              Caption / Crimson Text / Regular - 11px / 16px
            </TextCaptionFeature>
            <TextCaptionPrimary>
              Caption / Lato / Regular - 11px / 16px
            </TextCaptionPrimary>
          </CardContainer>

          <CreamCardContainer>
            <TextSubheadingPrimarySubdued>
              Subdued on Cream
            </TextSubheadingPrimarySubdued>

            <TextDisplayLargeSubdued>
              Display-Large / Crimson Text / SemiBold - 54px / 81px
            </TextDisplayLargeSubdued>
            <TextDisplaySmallSubdued>
              Display-Small / Crimson Text / SemiBold - 36px / 54px
            </TextDisplaySmallSubdued>
            <TextHeadingFeatureSubdued>
              Heading / Crimson Text / Bold - 24px / 36px
            </TextHeadingFeatureSubdued>
            <TextHeadingPrimarySubdued>
              Heading / Lato / Bold - 24px / 36px
            </TextHeadingPrimarySubdued>
            <TextSubheadingFeatureSubdued>
              Subheading / Crimson Text / Bold - 16px / 24px
            </TextSubheadingFeatureSubdued>
            <TextSubheadingPrimarySubdued>
              SUBHEADING / LATO / BOLD - 16PX / 24PX
            </TextSubheadingPrimarySubdued>
            <TextBodyFeatureSubdued>
              Body / Crimson Text / Regular - 16px / 24px
            </TextBodyFeatureSubdued>
            <TextBodyPrimarySubdued>
              Body / Lato / Regular - 16px / 24px
            </TextBodyPrimarySubdued>
            <TextCaptionFeatureSubdued>
              Caption / Crimson Text / Regular - 11px / 16px
            </TextCaptionFeatureSubdued>
            <TextCaptionPrimarySubdued>
              Caption / Lato / Regular - 11px / 16px
            </TextCaptionPrimarySubdued>
          </CreamCardContainer>
          <DarkCardContainer>
            <TextSubheadingPrimaryWhite>
              White on Ink
            </TextSubheadingPrimaryWhite>
            <TextDisplayLargeWhite>
              Display-Large / Crimson Text / SemiBold - 54px / 81px
            </TextDisplayLargeWhite>
            <TextDisplaySmallWhite>
              Display-Small / Crimson Text / SemiBold - 36px / 54px
            </TextDisplaySmallWhite>
            <TextHeadingFeatureWhite>
              Heading / Crimson Text / Bold - 24px / 36px
            </TextHeadingFeatureWhite>
            <TextHeadingPrimaryWhite>
              Heading / Lato / Bold - 24px / 36px
            </TextHeadingPrimaryWhite>
            <TextSubheadingFeatureWhite>
              Subheading / Crimson Text / Bold - 16px / 24px
            </TextSubheadingFeatureWhite>
            <TextSubheadingPrimaryWhite>
              SUBHEADING / LATO / BOLD - 16PX / 24PX
            </TextSubheadingPrimaryWhite>
            <TextBodyFeatureWhite>
              Body / Crimson Text / Regular - 16px / 24px
            </TextBodyFeatureWhite>
            <TextBodyPrimaryWhite>
              Body / Lato / Regular - 16px / 24px
            </TextBodyPrimaryWhite>
            <TextCaptionFeatureWhite>
              Caption / Crimson Text / Regular - 11px / 16px
            </TextCaptionFeatureWhite>
            <TextCaptionPrimaryWhite>
              Caption / Lato / Regular - 11px / 16px
            </TextCaptionPrimaryWhite>
          </DarkCardContainer>
        </Section>

        <ColorBlockWrapper>
          <TextSubheadingPrimarySubdued>Gray</TextSubheadingPrimarySubdued>

          <ColorBlockContainer>
            <ColorBlock displayColor={props => props.theme.color.gray.white}>
              <ColorName>
                {Object.getOwnPropertyNames(THEME.color)[1] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.gray)[0]}
              </ColorName>
              <ColorCode>{THEME.color.gray.white}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.gray.light}>
              <ColorName>
                {Object.getOwnPropertyNames(THEME.color)[1] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.gray)[1]}
              </ColorName>
              <ColorCode>{THEME.color.gray.light}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.gray.medium}>
              <ColorName>
                {Object.getOwnPropertyNames(THEME.color)[1] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.gray)[2]}
              </ColorName>
              <ColorCode>{THEME.color.gray.medium}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.gray.subdued}>
              <ColorName white>
                {Object.getOwnPropertyNames(THEME.color)[1] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.gray)[3]}
              </ColorName>
              <ColorCode white>{THEME.color.gray.subdued}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.gray.ink}>
              <ColorName white>
                {Object.getOwnPropertyNames(THEME.color)[1] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.gray)[4]}
              </ColorName>
              <ColorCode white>{THEME.color.gray.ink}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.gray.black}>
              <ColorName white>
                {Object.getOwnPropertyNames(THEME.color)[1] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.gray)[5]}
              </ColorName>
              <ColorCode white>{THEME.color.gray.black}</ColorCode>
            </ColorBlock>
          </ColorBlockContainer>
        </ColorBlockWrapper>

        <ColorBlockWrapper>
          <TextSubheadingPrimarySubdued>Cream</TextSubheadingPrimarySubdued>
          <ColorBlockContainer>
            <ColorBlock displayColor={props => props.theme.color.cream}>
              <ColorName>cream</ColorName>
              <ColorCode>{THEME.color.cream}</ColorCode>
            </ColorBlock>
          </ColorBlockContainer>
        </ColorBlockWrapper>

        <ColorBlockWrapper>
          <TextSubheadingPrimarySubdued>Red</TextSubheadingPrimarySubdued>

          <ColorBlockContainer>
            <ColorBlock displayColor={props => props.theme.color.red.lightest}>
              <ColorName>
                {Object.getOwnPropertyNames(THEME.color)[2] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.red)[0]}
              </ColorName>
              <ColorCode>{THEME.color.red.lightest}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.red.light}>
              <ColorName>
                {Object.getOwnPropertyNames(THEME.color)[2] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.red)[1]}
              </ColorName>
              <ColorCode>{THEME.color.red.light}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.red.feature}>
              <ColorName white>
                {Object.getOwnPropertyNames(THEME.color)[2] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.red)[2]}
              </ColorName>
              <ColorCode white>{THEME.color.red.feature}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.red.dark}>
              <ColorName white>
                {Object.getOwnPropertyNames(THEME.color)[2] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.red)[3]}
              </ColorName>
              <ColorCode white>{THEME.color.red.dark}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.red.darker}>
              <ColorName white>
                {Object.getOwnPropertyNames(THEME.color)[2] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.red)[4]}
              </ColorName>
              <ColorCode white>{THEME.color.red.darker}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.red.darkest}>
              <ColorName white>
                {Object.getOwnPropertyNames(THEME.color)[2] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.red)[5]}
              </ColorName>
              <ColorCode white>{THEME.color.red.darkest}</ColorCode>
            </ColorBlock>
          </ColorBlockContainer>
        </ColorBlockWrapper>

        <ColorBlockWrapper>
          <TextSubheadingPrimarySubdued>Blue</TextSubheadingPrimarySubdued>

          <ColorBlockContainer>
            <ColorBlock displayColor={props => props.theme.color.blue.lightest}>
              <ColorName>
                {Object.getOwnPropertyNames(THEME.color)[3] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.blue)[0]}
              </ColorName>
              <ColorCode>{THEME.color.blue.lightest}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.blue.light}>
              <ColorName>
                {Object.getOwnPropertyNames(THEME.color)[3] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.blue)[1]}
              </ColorName>
              <ColorCode>{THEME.color.blue.light}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.blue.medium}>
              <ColorName white>
                {Object.getOwnPropertyNames(THEME.color)[3] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.blue)[3]}
              </ColorName>
              <ColorCode white>{THEME.color.blue.medium}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.blue.dark}>
              <ColorName white>
                {Object.getOwnPropertyNames(THEME.color)[3] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.blue)[4]}
              </ColorName>
              <ColorCode white>{THEME.color.blue.dark}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.blue.feature}>
              <ColorName white>
                {Object.getOwnPropertyNames(THEME.color)[3] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.blue)[4]}
              </ColorName>
              <ColorCode white>{THEME.color.blue.feature}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.blue.darkest}>
              <ColorName white>
                {Object.getOwnPropertyNames(THEME.color)[3] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.blue)[5]}
              </ColorName>
              <ColorCode white>{THEME.color.blue.darkest}</ColorCode>
            </ColorBlock>
          </ColorBlockContainer>
        </ColorBlockWrapper>

        <ColorBlockWrapper>
          <TextSubheadingPrimarySubdued>Blue</TextSubheadingPrimarySubdued>

          <ColorBlockContainer>
            <ColorBlock
              displayColor={props => props.theme.color.green.lightest}
            >
              <ColorName>
                {Object.getOwnPropertyNames(THEME.color)[4] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.green)[0]}
              </ColorName>
              <ColorCode>{THEME.color.green.lightest}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.green.light}>
              <ColorName>
                {Object.getOwnPropertyNames(THEME.color)[4] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.green)[1]}
              </ColorName>
              <ColorCode>{THEME.color.green.light}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.green.medium}>
              <ColorName>
                {Object.getOwnPropertyNames(THEME.color)[4] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.green)[4]}
              </ColorName>
              <ColorCode>{THEME.color.green.medium}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.green.dark}>
              <ColorName>
                {Object.getOwnPropertyNames(THEME.color)[4] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.green)[3]}
              </ColorName>
              <ColorCode>{THEME.color.green.dark}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.green.feature}>
              <ColorName white>
                {Object.getOwnPropertyNames(THEME.color)[4] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.green)[4]}
              </ColorName>
              <ColorCode white>{THEME.color.green.feature}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.green.darkest}>
              <ColorName white>
                {Object.getOwnPropertyNames(THEME.color)[4] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.green)[5]}
              </ColorName>
              <ColorCode white>{THEME.color.green.darkest}</ColorCode>
            </ColorBlock>
          </ColorBlockContainer>
        </ColorBlockWrapper>

        <ColorBlockWrapper>
          <TextSubheadingPrimarySubdued>Yellow</TextSubheadingPrimarySubdued>

          <ColorBlockContainer>
            <ColorBlock
              displayColor={props => props.theme.color.yellow.lightest}
            >
              <ColorName>
                {Object.getOwnPropertyNames(THEME.color)[5] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.yellow)[0]}
              </ColorName>
              <ColorCode>{THEME.color.yellow.lightest}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.yellow.light}>
              <ColorName>
                {Object.getOwnPropertyNames(THEME.color)[5] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.yellow)[1]}
              </ColorName>
              <ColorCode>{THEME.color.yellow.light}</ColorCode>
            </ColorBlock>
            <ColorBlock
              displayColor={props => props.theme.color.yellow.feature}
            >
              <ColorName>
                {Object.getOwnPropertyNames(THEME.color)[5] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.yellow)[2]}
              </ColorName>
              <ColorCode>{THEME.color.yellow.feature}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.yellow.dark}>
              <ColorName>
                {Object.getOwnPropertyNames(THEME.color)[5] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.yellow)[3]}
              </ColorName>
              <ColorCode>{THEME.color.yellow.dark}</ColorCode>
            </ColorBlock>
            <ColorBlock displayColor={props => props.theme.color.yellow.darker}>
              <ColorName white>
                {Object.getOwnPropertyNames(THEME.color)[5] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.yellow)[4]}
              </ColorName>
              <ColorCode white>{THEME.color.yellow.darker}</ColorCode>
            </ColorBlock>
            <ColorBlock
              displayColor={props => props.theme.color.yellow.darkest}
            >
              <ColorName white>
                {Object.getOwnPropertyNames(THEME.color)[5] +
                  " / " +
                  Object.getOwnPropertyNames(THEME.color.yellow)[5]}
              </ColorName>
              <ColorCode white>{THEME.color.yellow.darkest}</ColorCode>
            </ColorBlock>
          </ColorBlockContainer>
        </ColorBlockWrapper>
      </Container>
    </Wrapper>
  </>
);

export default Home;
