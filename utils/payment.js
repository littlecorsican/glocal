import { Money } from '@dintero/money'

// THIS FILE CONTAINS PAYMENT CALCULATION FUNCTIONS

// export const calculateTourDepositAmount=({ deposit, totalHeadCount })=>{
//     // CALCULATE DEPOSIT AMOUNT
//     return Money.of(deposit, 'MYR')
//     .multiply(totalHeadCount)
//     .toString()
// }

// export const calculateCruiseDepositAmount=()=>{
    
// }

export const calculateTourTotalAmount=({ adultRoom, childWithBedRoom, childWithoutBedRoom, infantRoom, adminChargesPercentage, deposit, totalHeadCount })=>{
    // CALCULATE TOTAL AMOUNT
    const amountPreAdminCharges = Money.of(adultRoom, 'MYR')
    .add(Money.of(childWithBedRoom, 'MYR'))
    .add(Money.of(childWithoutBedRoom, 'MYR'))
    .add(Money.of(infantRoom, 'MYR'))
    .toString()

    console.log("amountPreAdminCharges", amountPreAdminCharges)

    const adminCharges = Money.of(amountPreAdminCharges, 'MYR').multiply(adminChargesPercentage)
    const amountPostAdminCharges = Money.of(amountPreAdminCharges, 'MYR').add(adminCharges).toString()

    console.log("adminCharges", adminCharges)
    console.log("amountPostAdminCharges", amountPostAdminCharges)

    // CALCULATE DEPOSIT AMOUNT
    const depositAmount = Money.of(deposit, 'MYR')
    .multiply(totalHeadCount)
    .toString()

    return { amountPreAdminCharges, adminCharges, amountPostAdminCharges, depositAmount }
}


export const calculateCruiseTotalAmount=({ peopleAmount, infantAmount, portCharges_amt, adminChargesPercentage, deposit, totalHeadCount })=>{
    // CALCULATE TOTAL AMOUNT
    const amountPreAdminCharges = Money.of(peopleAmount, 'MYR')
    .add(Money.of(infantAmount, 'MYR'))
    .add(Money.of(portCharges_amt, 'MYR'))
    .toString()

    console.log("amountPreAdminCharges", amountPreAdminCharges)

    const adminCharges = Money.of(amountPreAdminCharges, 'MYR').multiply(adminChargesPercentage)
    const amountPostAdminCharges = Money.of(amountPreAdminCharges, 'MYR').add(adminCharges).toString()

    console.log("adminCharges", adminCharges)
    console.log("amountPostAdminCharges", amountPostAdminCharges)

    // CALCULATE DEPOSIT AMOUNT
    const depositAmount = Money.of(deposit, 'MYR')
    .multiply(totalHeadCount)
    .toString()

    return { amountPreAdminCharges, adminCharges, amountPostAdminCharges, depositAmount }
}