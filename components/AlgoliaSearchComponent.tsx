import {Hits, InstantSearch,} from 'react-instantsearch-dom';
import HitsComponent from "./HitsComponent";
import CustomSearchBox from "./CustomSearchBox";

const AlgoliaSearchComponent = (props: any) => {

  return (
    <InstantSearch
      indexName={"dev_jobs_index"}
      searchClient={props.searchClient}
    >
      <CustomSearchBox/>
      <Hits hitComponent={HitsComponent}/>
    </InstantSearch>
  );
};


export default AlgoliaSearchComponent;