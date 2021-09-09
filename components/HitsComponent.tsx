import React, {useState} from "react";
import {searchObjectModel} from "../interfaces/searchModel";
import styled from "styled-components";
import {Highlight} from "react-instantsearch-dom";


interface IHit {
    hit: searchObjectModel
}

const ShowCard = styled.article`
  width: 100%;
  min-height: 15rem;
  background-color: white;
  border-radius: 1rem;
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

const ContentTop = styled.div`
  display: flex;
  width: 100%;
`
const ContentLeft = styled.div`
  padding-top: 1rem;
  width: 50%;
  text-align: left;
  height: 100%;
`
const ContentRight = styled.div`
  width: 50%;
  text-align: right;
`

const LogoImage = styled.img`
  width: 8rem;
  height: 8rem;
  box-sizing: border-box;
`

const TextHeading = styled.h3`
  font-size: 1.7rem;
  font-weight: bold;

`

const Text = styled.p`
  font-size: 1.2rem;
  margin: 0;
  padding: 0 0 2px;
`
const DescText= styled(Text)`
white-space: pre-line;
`
const TextLast = styled(Text)`
  margin-top: 2.4rem;
`
const GrayedOut = styled.span`
  color: gray;
`
const ToggleButton = styled.button`
all:unset;
  display: inline;
  cursor: pointer;
  color: blue;
`



const Hit: React.FunctionComponent<IHit> = (props) => {
    const [textToggle, setTextToggle] = useState<boolean>(false);
    return (
        <ShowCard>
            <ContentWrapper>
                <ContentTop>
                    <ContentLeft>
                        <TextHeading><Highlight hit={props.hit} attribute={"data_job.job_title"} tagName="mark"/></TextHeading>
                        <Text>{props.hit.data_company.company_industry}</Text>
                        <Text>{props.hit.data_company.company_type}</Text>
                        <Text><GrayedOut>Experience: </GrayedOut>{props.hit.data_job.job_experience}</Text>
                        <Text><GrayedOut>Salary: </GrayedOut>{props.hit.data_job.job_wage_type} {props.hit.data_job.job_wage_currency}{props.hit.data_job.job_wage.toString()}</Text>
                        <TextLast>Job overview:</TextLast>
                    </ContentLeft>
                    <ContentRight>
                        <LogoImage src={props.hit.data_company.company_logo}/>
                        <Text>{props.hit.data_company.company_name}</Text>
                        <Text><GrayedOut>Company members: </GrayedOut>{props.hit.data_company.company_size}</Text>
                        <Text>{props.hit.data_location.location_country}</Text>
                        <Text>{props.hit.data_location.location_city} {props.hit.data_location.location_postcode}</Text>
                        <Text>{props.hit.data_location.location_address_1}</Text>
                    </ContentRight>
                </ContentTop>
                {textToggle ?
                    <DescText>{props.hit.data_job.job_description} <ToggleButton onClick={()=>setTextToggle(false)}>Close</ToggleButton></DescText>
                    :
                    <DescText>{props.hit.data_job.job_description.substring(0,100)}<ToggleButton onClick={()=>setTextToggle(true)}>...See more?</ToggleButton></DescText>}
            </ContentWrapper>


        </ShowCard>)
}


export default Hit