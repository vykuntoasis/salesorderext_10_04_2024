/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { SalesOrderBillingPlanItemApi } from './SalesOrderBillingPlanItemApi';
import {
  SalesOrderBillingPlan,
  SalesOrderBillingPlanType
} from './SalesOrderBillingPlan';
import { SalesOrder, SalesOrderType } from './SalesOrder';

/**
 * This class represents the entity "A_SalesOrderBillingPlanItem" of service "API_SALES_ORDER_SRV".
 */
export class SalesOrderBillingPlanItem<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderBillingPlanItemType<T>
{
  /**
   * Technical entity name for SalesOrderBillingPlanItem.
   */
  static _entityName = 'A_SalesOrderBillingPlanItem';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
  /**
   * All key fields of the SalesOrderBillingPlanItem entity
   */
  static _keys = ['SalesOrder', 'BillingPlan', 'BillingPlanItem'];
  /**
   * Sales Order.
   * Maximum length: 10.
   */
  declare salesOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing/Invoicing Plan Number.
   * Maximum length: 10.
   */
  declare billingPlan: DeserializedType<T, 'Edm.String'>;
  /**
   * Item for billing plan/invoice plan/payment cards.
   * Maximum length: 6.
   */
  declare billingPlanItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Date Category.
   * Maximum length: 2.
   * @nullable
   */
  declare billingPlanDateCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Date.
   * @nullable
   */
  declare billingPlanBillingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Value to be billed/calc. on date in billing/invoice plan.
   * @nullable
   */
  declare billingPlanAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  declare transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Percentage of value to be invoiced.
   * @nullable
   */
  declare billingPlanAmountPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Terms of Payment Key.
   * Maximum length: 4.
   * @nullable
   */
  declare customerPaymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proposed Billing Type for an Order-Related Billing Document.
   * Maximum length: 4.
   * @nullable
   */
  declare proposedBillingDocumentType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Date Description.
   * Maximum length: 4.
   * @nullable
   */
  declare billingPlanDateDescriptionCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Billing Block for Billing/Invoicing Plan Date.
   * Maximum length: 2.
   * @nullable
   */
  declare billingBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settlement Start Date of Billing/Invoicing Date.
   * @nullable
   */
  declare billingPlanServiceStartDate?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * Settlement End Date of Billing/Invoicing Date.
   * @nullable
   */
  declare billingPlanServiceEndDate?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * Billing Status for Billing/Invoicing Plan Date.
   * Maximum length: 1.
   * @nullable
   */
  declare billingPlanRelatedBillgStatus?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Billing/Invoicing Plan Type.
   * Maximum length: 2.
   * @nullable
   */
  declare billingPlanType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ID for Adopting Billing/Invoicing Date.
   * Maximum length: 1.
   * @nullable
   */
  declare adoptingBillingDateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rule in billing plan/invoice plan.
   * Maximum length: 1.
   * @nullable
   */
  declare billingPlanBillingRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Usage.
   * Maximum length: 5.
   * @nullable
   */
  declare billingPlanMilestoneUsage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator for Correction Date in Billing Plan.
   * Maximum length: 1.
   * @nullable
   */
  declare billgPlnDteCorrectionRfndType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Exchange Rate for FI Postings.
   * @nullable
   */
  declare accountingExchangeRate?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Reason for Postponement.
   * Maximum length: 255.
   * @nullable
   */
  declare postponementReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrderBillingPlan} entity.
   */
  declare toBillingPlan?: SalesOrderBillingPlan<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrder} entity.
   */
  declare toSalesOrder?: SalesOrder<T> | null;

  constructor(_entityApi: SalesOrderBillingPlanItemApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderBillingPlanItemType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  billingPlan: DeserializedType<T, 'Edm.String'>;
  billingPlanItem: DeserializedType<T, 'Edm.String'>;
  billingPlanDateCategory?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanBillingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  billingPlanAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanAmountPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  customerPaymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  proposedBillingDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanDateDescriptionCode?: DeserializedType<T, 'Edm.String'> | null;
  billingBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanServiceStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  billingPlanServiceEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  billingPlanRelatedBillgStatus?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanType?: DeserializedType<T, 'Edm.String'> | null;
  adoptingBillingDateId?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanBillingRule?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanMilestoneUsage?: DeserializedType<T, 'Edm.String'> | null;
  billgPlnDteCorrectionRfndType?: DeserializedType<T, 'Edm.String'> | null;
  accountingExchangeRate?: DeserializedType<T, 'Edm.Decimal'> | null;
  postponementReason?: DeserializedType<T, 'Edm.String'> | null;
  toBillingPlan?: SalesOrderBillingPlanType<T> | null;
  toSalesOrder?: SalesOrderType<T> | null;
}
