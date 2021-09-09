
export interface searchObjectModel {
    data_company: {
        company_id: number;
        company_name: string;
        company_logo: string;
        company_industry: string;
        company_size: number;
        company_type: string;
    }
    data_job: {
        job_category_label: string;
        job_category_tag: string;
        job_deep_link: string;
        job_description: string;
        job_experience: string;
        job_external_id: number;
        job_featured: string;
        job_id: number;
        job_owned: boolean;
        job_passport_id: number;
        job_priority: number;
        job_published_at: string;
        job_redirect_url: string;
        job_status: string;
        job_title: string;
        job_type: string;
        job_updated_at: string;
        job_url: string;
        job_views: number;
        job_wage: number;
        job_wage_currency: string;
        job_wage_type: string;
    }
    data_location: {
        location_address_1: string;
        location_address_2: string;
        location_city: string;
        location_country: string;
        location_postcode: string;
    }
    objectID: string;
    __position: number;
    _geoloc: { lat: number, lng: number };
    _highlightResult: {
        data_job: { value: string; matchLevel: string, matchedWords: Array<string>, fullyHighlighted?: boolean };
    };
    _tags: Array<string>;
}