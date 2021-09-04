/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTireCheckinfo = /* GraphQL */ `
  mutation CreateTireCheckinfo(
    $input: CreateTireCheckinfoInput!
    $condition: ModelTireCheckinfoConditionInput
  ) {
    createTireCheckinfo(input: $input, condition: $condition) {
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
export const updateTireCheckinfo = /* GraphQL */ `
  mutation UpdateTireCheckinfo(
    $input: UpdateTireCheckinfoInput!
    $condition: ModelTireCheckinfoConditionInput
  ) {
    updateTireCheckinfo(input: $input, condition: $condition) {
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
export const deleteTireCheckinfo = /* GraphQL */ `
  mutation DeleteTireCheckinfo(
    $input: DeleteTireCheckinfoInput!
    $condition: ModelTireCheckinfoConditionInput
  ) {
    deleteTireCheckinfo(input: $input, condition: $condition) {
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
export const createTireProfile = /* GraphQL */ `
  mutation CreateTireProfile(
    $input: CreateTireProfileInput!
    $condition: ModelTireProfileConditionInput
  ) {
    createTireProfile(input: $input, condition: $condition) {
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
export const updateTireProfile = /* GraphQL */ `
  mutation UpdateTireProfile(
    $input: UpdateTireProfileInput!
    $condition: ModelTireProfileConditionInput
  ) {
    updateTireProfile(input: $input, condition: $condition) {
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
export const deleteTireProfile = /* GraphQL */ `
  mutation DeleteTireProfile(
    $input: DeleteTireProfileInput!
    $condition: ModelTireProfileConditionInput
  ) {
    deleteTireProfile(input: $input, condition: $condition) {
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
