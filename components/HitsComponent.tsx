import React, {useState} from "react";
import {SearchObjectModel} from "../interfaces/searchModel";
import styled from "styled-components";
import {Highlight} from "react-instantsearch-dom";

interface IHit {
  hit: SearchObjectModel
}

const ShowCard = styled.article`
  width: 100%;
  min-height: 15rem;
  background-color: white;
  border-radius:10px;
  margin-bottom: .8rem;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-.3rem);
    box-shadow: 0 1rem 2rem rgba(0.5, 0.5, 0.5, 0.5);
  }
`
const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0rem 1rem 1rem 1rem;
  flex-direction: column;
`

const ContentTop = styled.header`
  display: flex;
  width: 100%;
  @media only screen and (max-width: 400px) {
    flex-direction: column-reverse;
  }
`
const MainInfo = styled.section`
  padding-top: 1rem;
  width: 50%;
  text-align: left;
  height: 100%;
  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`
const CompanyInfo = styled.section`
  width: 50%;
  text-align: right;
  @media only screen and (max-width: 400px) {
    padding-top: .2rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`
const CompanyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

`;

const LogoImage = styled.img`
  width: 8rem;
  height: 8rem;
  box-sizing: border-box;
`;

const TextHeading = styled.h2`
  font-size: 1.7rem;
  font-weight: bold;

`;


const Text = styled.p`
  font-size: 1.2rem;
  margin: 0;
  padding: 0 0 2px;
`;

const DescText = styled(Text)`
  white-space: pre-line;
`;
const Hthree = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  padding: 0 0 2px;
`;

const Label = styled.span`
  color: gray;
`;

const ToggleButton = styled.button`
  all: unset;
  display: inline;
  cursor: pointer;
  color: blue;
`;

const LinkWrapper = styled.div`
  margin-top: 2rem;
  margin-left: 1rem;
  @media only screen and (max-width: 400px) {
    margin-bottom: 2rem;
  }
`;

const ApplyButton = styled.a`
  all: unset;
  cursor: pointer;
  font-size: 2rem;
  background-color: blue;
  color: white;
  padding: 0.7rem;
  border-radius: 15px;

  @media only screen and (max-width: 400px) {
    font-size: 1.4rem;
  };
`;

const CustomFooter = styled.footer`
  margin-top: auto;
  margin-left: auto;
`;

const Hit: React.FunctionComponent<IHit> = (props) => {

  const [textToggle, setTextToggle] = useState<boolean>(false);

  return (
    <ShowCard>
      <ContentWrapper>
        <ContentTop>
          <MainInfo>
            <TextHeading><Highlight hit={props.hit} attribute={"data_job.job_title"}
                                    tagName="mark"/></TextHeading>
            <Text>{props.hit.data_company.company_industry}</Text>
            <Text>{props.hit.data_company.company_type}</Text>
            <Text><Label>Experience: </Label>{props.hit.data_job.job_experience}</Text>
            <Text><Label>Salary: </Label>{props.hit.data_job.job_wage_type} {props.hit.data_job.job_wage_currency}{props.hit.data_job.job_wage.toString()}
            </Text>
            <LinkWrapper>
              <ApplyButton href={`${props.hit.data_job.job_deep_link}`}>Apply
                now!</ApplyButton>
            </LinkWrapper>

          </MainInfo>
          <CompanyInfo>
            <LogoImage src={props.hit.data_company.company_logo}/>
            <CompanyInfoWrapper>
              <Text>{props.hit.data_company.company_name}</Text>
              <Text><Label>Company members: </Label>{props.hit.data_company.company_size}</Text>
              <Text>{props.hit.data_location.location_country}</Text>
              <Text>{props.hit.data_location.location_city} {props.hit.data_location.location_postcode}</Text>
              <Text>{props.hit.data_location.location_address_1}</Text>
            </CompanyInfoWrapper>
          </CompanyInfo>
        </ContentTop>
        <article>
          <Hthree>Job overview:</Hthree>
          {textToggle ?
            <DescText>{props.hit.data_job.job_description} <ToggleButton
              onClick={() => setTextToggle(false)}>Close</ToggleButton></DescText>
            :
            <DescText>{props.hit.data_job.job_description.substring(0, 100)}<ToggleButton
              onClick={() => setTextToggle(true)}>... See more?</ToggleButton></DescText>}
        </article>
        <CustomFooter>
          <Label>Created at: {props.hit.data_job.job_published_at}</Label>
        </CustomFooter>
      </ContentWrapper>


    </ShowCard>)
}


export default Hit