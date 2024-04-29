import React from 'react';
import styled from 'styled-components';
import { color } from '../theme';
import { Grid, Header, Image, Segment } from 'semantic-ui-react';
import goFundMeSrc from '../assets/images/goFundMe.png';
import gazaOnlineSrc from '../assets/images/gazaOnline.png';
import eSimsForGazaSrc from '../assets/images/eSimsForGaza.png';
import nprSrc from '../assets/images/npr.png';

const Container = styled.div`
  background-color: ${(props) => props.color} !important;
`;

const StyledSegment = styled(Segment)`
  padding: 4em 0em !important;
`;

const StyledSubHeader = styled(Header)`
  font-size: 2em;
  color: ${color.green} !important;
`;

const StyledText = styled.p`
  font-size: 1.33em;
  color: ${color.black} !important;
  margin-top: 1em;
  padding-left: 1em;
`;

const StyledHeader = styled(Header)`
  font-size: 2em;
  color: ${color.black} !important;
  text-align: center;
  padding-top: 2em;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 2em;
`;

const Button = styled.a`
  height: 10em;
  width: 10em;
  margin: 1em;
  border: 2px solid ${color.backgroundGrey};
`;

const ImageContainer = styled.div`
  background-color: ${(props) => props.color} !important;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 1em;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 0 ${color.black};
  }
`;

const FundraisingEfforts = () => {
  return (
    <Container color={color.backgroundGrey}>
      <StyledHeader as="h3">Fundraising Efforts</StyledHeader>
      <StyledSegment vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row columns={2}>
            <Grid.Column width={8}>
              <StyledSubHeader as="h3">Geeks Keep Gaza Connected</StyledSubHeader>
              <StyledText>
                <b>GazaOnline</b> is a volunteer effort to provide free electronic SIM cards, or
                eSIMs, to Gazan families in order to remain in contact with each other, the outside
                world, and life-saving emergency services. A notable campaign is "Geeks Keeping Gaza
                Connected," organized by Hannah Brannan on GoFundMe, which has raised significant
                funds to provide eSIMs directly to Gazans, ensuring they remain in contact with each
                other and the outside world
              </StyledText>
            </Grid.Column>
            <Grid.Column width={8}>
              <ButtonsContainer>
                <Button href="https://www.gofundme.com/f/keeping-gaza-connected">
                  <ImageContainer color={color.white}>
                    <Image src={goFundMeSrc} />
                  </ImageContainer>
                </Button>
                <Button href="https://www.gaza.online/home">
                  <ImageContainer color={color.orange}>
                    <Image src={gazaOnlineSrc} />
                  </ImageContainer>
                </Button>
              </ButtonsContainer>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column width={8}>
              <StyledSubHeader as="h3">ESims for Gaza</StyledSubHeader>
              <StyledText>
                Another effort, detailed on the dedicated website "<b>eSims for Gaza</b>," focuses
                on collecting eSIM donations which are then matched with families in Gaza to
                maintain their internet access despite ongoing connectivity issues. This initiative
                emphasizes the importance of donating directly to their specified email to avoid
                scams and ensure the eSIMs reach those in need
              </StyledText>
            </Grid.Column>
            <Grid.Column width={8}>
              <ButtonsContainer>
                <Button href="https://gazaesims.com/">
                  <ImageContainer color={color.white}>
                    <Image src={eSimsForGazaSrc} size="tiny" />
                  </ImageContainer>
                </Button>
                <Button href="https://www.wusf.org/2023-11-21/how-esims-are-helping-thousands-in-gaza-stay-connected-to-the-world-during-communications-blackouts">
                  <ImageContainer color={color.black}>
                    <Image src={nprSrc} size="tiny" />
                  </ImageContainer>
                </Button>
              </ButtonsContainer>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column width={8}>
              <StyledSubHeader as="h3">Help us send eSIMS to Gaza</StyledSubHeader>
              <StyledText>
                Another GoFundMe campaign organized by Iqra Ismail detailed her effort to raise
                funds for buying and sending eSIMs to Gazans, highlighting the logistical challenges
                and the critical need for timely aid given the fluctuating telecommunications access
                in the region
              </StyledText>
            </Grid.Column>
            <Grid.Column width={8}>
              <ButtonsContainer>
                <Button href="https://www.gofundme.com/f/help-us-send-esims-to-gaza">
                  <ImageContainer color={color.white}>
                    <Image src={goFundMeSrc} />
                  </ImageContainer>
                </Button>
              </ButtonsContainer>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </StyledSegment>
    </Container>
  );
};

export default FundraisingEfforts;
