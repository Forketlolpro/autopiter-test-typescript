export interface Suggestion {
    data: SuggestionData
    value: string,
    unrestricted_value: string
}

export interface SuggestionData {
    address: SuggestionAddress,
    management: SuggestionManagement,
    state: SuggestionState,
    opf: SuggestionOpf,
    name: SuggestionName,
    kpp: string,
    capital: null,  
    founders: null,
    managers: null,
    branch_type: string,
    branch_count: number,
    source: null,
    qc: null,
    hid: string,
    type: string,
    inn: string,
    ogrn: string,
    okpo: null,
    okved: string,
    okveds: null,
    authorities: null,
    documents: null,
    licenses: null,
    finance: null,
    phones: null,
    emails: null,
    ogrn_date: number,
    okved_type: string,
    employee_count: null
}

export interface SuggestionAddress {
    data: SuggestionAddressData
    value: string,
    unrestricted_value: string,
}

export interface SuggestionAddressData {
    area: string
    area_fias_id: string
    area_kladr_id: string
    area_type: string
    area_type_full: string
    area_with_type: string
    beltway_distance: null
    beltway_hit: null
    block: null
    block_type: null
    block_type_full: null
    capital_marker: string
    city: string
    city_area: null
    city_district: null
    city_district_fias_id: null
    city_district_kladr_id: null
    city_district_type: null
    city_district_type_full: null
    city_district_with_type: null
    city_fias_id: string
    city_kladr_id: string
    city_type: string
    city_type_full: string
    city_with_type: string
    country: string
    country_iso_code: string
    federal_district: string
    fias_actuality_state: string
    fias_code: string
    fias_id: string
    fias_level: string
    flat: null
    flat_area: string
    flat_price: null
    flat_type: null
    flat_type_full: null
    geo_lat: string
    geo_lon: string
    geoname_id: null
    history_values: null
    house: string
    house_fias_id: string
    house_kladr_id: string
    house_type: string
    house_type_full: string
    kladr_id: string
    metro: null
    okato: string
    oktmo: string
    postal_box: null
    postal_code: string
    qc: string
    qc_complete: null
    qc_geo: string
    qc_house: null
    region: string
    region_fias_id: string
    region_iso_code: string
    region_kladr_id: string
    region_type: string
    region_type_full: string
    region_with_type: string
    settlement: null
    settlement_fias_id: null
    settlement_kladr_id: null
    settlement_type: null
    settlement_type_full: null
    settlement_with_type: null
    source: string
    square_meter_price: null
    street: string
    street_fias_id: string
    street_kladr_id: string
    street_type: string
    street_type_full: string
    street_with_type: string
    tax_office: string
    tax_office_legal: string
    timezone: string
    unparsed_parts: null
}

export interface SuggestionManagement {
    name: string,
    post: string
    disqualified: null
}

export interface SuggestionState {
    status: string,
    actuality_date: number,
    registration_date: number,
    liquidation_date: null
}

export interface SuggestionOpf {
    type: string,
    code: string,
    full: string,
    short: string
}

export interface SuggestionName {
    full_with_opf: string
    short_with_opf: string
    latin: null,
    full: string
    short: string
}