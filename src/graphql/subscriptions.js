/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTireCheckinfo = /* GraphQL */ `
  subscription OnCreateTireCheckinfo {
    onCreateTireCheckinfo {
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
export const onUpdateTireCheckinfo = /* GraphQL */ `
  subscription OnUpdateTireCheckinfo {
    onUpdateTireCheckinfo {
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
export const onDeleteTireCheckinfo = /* GraphQL */ `
  subscription OnDeleteTireCheckinfo {
    onDeleteTireCheckinfo {
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
export const onCreateTireProfile = /* GraphQL */ `
  subscription OnCreateTireProfile {
    onCreateTireProfile {
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
export const onUpdateTireProfile = /* GraphQL */ `
  subscription OnUpdateTireProfile {
    onUpdateTireProfile {
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
export const onDeleteTireProfile = /* GraphQL */ `
  subscription OnDeleteTireProfile {
    onDeleteTireProfile {
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
