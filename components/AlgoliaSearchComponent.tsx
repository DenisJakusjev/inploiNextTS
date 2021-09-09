import {Hits, InstantSearch} from 'react-instantsearch-dom';
import HitsComponent from "./HitsComponent";
import CustomSearchBox from "./CustomSearchBox";

const AlgoliaSearchComponent = (props: any) => {

  return (
    <InstantSearch
      indexName={process.env.NEXT_PUBLIC_INDEX_NAME as string}
      searchClient={props.searchClient}
    >
      <CustomSearchBox/>
      <Hits hitComponent={HitsComponent}/>
    </InstantSearch>
  );
};


export default AlgoliaSearchComponent;
