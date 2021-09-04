/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTireCheckinfo = /* GraphQL */ `
  query GetTireCheckinfo($id: ID!) {
    getTireCheckinfo(id: $id) {
      id
      topTable {
        controlNumber
        contractorName
        location
        vehicleType
        number
        wareHouse
        contractPeriod
        contractType
      }
      productInfo {
        searchDate
        status
        tireType
        wheel
        runFlood
        recommended
        usedTime
      }
      tires {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTireCheckinfos = /* GraphQL */ `
  query ListTireCheckinfos(
    $filter: ModelTireCheckinfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTireCheckinfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTireProfile = /* GraphQL */ `
  query GetTireProfile($id: ID!) {
    getTireProfile(id: $id) {
      id
      name
      number
      image
      tireInfomation
      makerVersion
      measurement {
        tireReplaceJdg
        yearManufacJdg
        recombinIO
        punctureInsp
        alignment
        wheelReplace
        checkFillAir
      }
      status {
        remainGroove
        foreignObjectStab
        unevenWear
        wheelRimBend
        crack
        wheelCorrosion
        separation
        nutSearWear
        airFlow
      }
      comment
      checkInfoID
      tireCheckinfo {
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTireProfiles = /* GraphQL */ `
  query ListTireProfiles(
    $filter: ModelTireProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTireProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        number
        image
        tireInfomation
        makerVersion
        comment
        checkInfoID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
