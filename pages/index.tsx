import type {NextPage} from 'next';
import styled from "styled-components";
import SearchFieldComponent from "../components/AlgoliaSearchComponent";
import algoliasearch from 'algoliasearch/lite';

const PageBody = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const ContentDiv = styled.main`
  width: 75vw;
  min-height: 80vh;
  height: 100%;
  background-image: linear-gradient(to right top, rgba(0, 0, 255, 0.81), rgba(255, 0, 0, 0.68));
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 400px) {
    width: 100vw;
  }
`;

const Title = styled.h1`
  margin-top: 15rem;
  font-size: 3rem;
  color: ${({theme}) => theme.colors.white};
  
  @media only screen and (max-width: 400px) {
    font-size: 2.5rem;
  }
`;

const Home: NextPage = () => {

  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_APP_ID as string, process.env.NEXT_PUBLIC_API_KEY as string
  );

  return (
    <PageBody>
      <ContentDiv>
        <Title>inploi Test Application</Title>
        <SearchFieldComponent searchClient={searchClient}/>
      </ContentDiv>
    </PageBody>
  );
};

export default Home;
