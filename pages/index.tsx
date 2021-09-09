import type {NextPage} from 'next'
import styled from "styled-components"
import SearchFieldComponent from "../components/AlgoliaSearchComponent";
import algoliasearch from 'algoliasearch/lite';

const PageBody = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const ContentDiv = styled.div`
  width: 75vw;
  min-height: 80vh;
  height: 100%;
  background-image: linear-gradient(to right top, rgba(0, 0, 255, 0.81), rgba(255, 0, 0, 0.68));
  display: flex;
  flex-direction: column;
  align-items: center;
  

`;

const Title = styled.h1`
  margin-top:15rem;
  font-size: 3rem;
  color: ${({theme}) => theme.colors.white};
`

const Home: NextPage = () => {

    const searchClient = algoliasearch(
        "RY8KA2GJPX","13e751a21f2ae69d7ccb7b590a0a9b3a"
    )

    return (
        <PageBody>
            <ContentDiv>
                <Title>inploi Test Application</Title>
                <SearchFieldComponent searchClient={searchClient}/>
            </ContentDiv>
        </PageBody>


    )
}

export default Home
