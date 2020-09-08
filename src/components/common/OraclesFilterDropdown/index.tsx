import React from 'react'

import { ButtonSelectLight } from 'components/buttons/ButtonSelectLight'
import { Dropdown, DropdownItem, DropdownPosition } from 'components/common/Dropdown'
import { useWeb3ConnectedOrInfura } from 'contexts/Web3Context'
import { Oracle, OracleFilterOptions } from 'util/types'

interface Props {
  onClick: (value: OracleFilterOptions, filter: string[]) => void
  value: string
}

export const OraclesFilterDropdown = ({ onClick, value }: Props) => {
  const { networkConfig } = useWeb3ConnectedOrInfura()
  const oracles: Oracle[] = networkConfig.getOracles()

  const oraclesAdresses: string[] = oracles.map((oracle: Oracle) => oracle.address)

  const oraclesItems = [
    {
      text: 'All Reporters / Oracles',
      onClick: () => {
        onClick(OracleFilterOptions.All, [])
      },
      value: OracleFilterOptions.All,
    },
    {
      text: 'Custom Reporters',
      onClick: () => {
        onClick(OracleFilterOptions.Custom, oraclesAdresses)
      },
      value: OracleFilterOptions.Custom,
    },
  ]

  for (const oracle of oracles) {
    const oracleItem = {
      text: oracle.description,
      onClick: () => {
        onClick(oracle.name as OracleFilterOptions, [oracle.address])
      },
      value: oracle.name as OracleFilterOptions,
    }
    oraclesItems.push(oracleItem)
  }

  return (
    <Dropdown
      currentItem={oraclesItems.findIndex((oracleItem) => oracleItem.value === value)}
      dropdownButtonContent={
        <ButtonSelectLight content={oraclesItems.filter((item) => item.value === value)[0].text} />
      }
      dropdownPosition={DropdownPosition.right}
      items={oraclesItems.map((item, index) => (
        <DropdownItem key={index} onClick={item.onClick}>
          {item.text}
        </DropdownItem>
      ))}
    />
  )
}
