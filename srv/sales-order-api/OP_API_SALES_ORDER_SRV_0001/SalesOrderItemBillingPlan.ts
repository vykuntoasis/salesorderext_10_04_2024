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
import type { SalesOrderItemBillingPlanApi } from './SalesOrderItemBillingPlanApi';
import {
  SlsOrderItemBillingPlanItem,
  SlsOrderItemBillingPlanItemType
} from './SlsOrderItemBillingPlanItem';
import { SalesOrder, SalesOrderType } from './SalesOrder';
import { SalesOrderItem, SalesOrderItemType } from './SalesOrderItem';

/**
 * This class represents the entity "A_SalesOrderItemBillingPlan" of service "API_SALES_ORDER_SRV".
 */
export class SalesOrderItemBillingPlan<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderItemBillingPlanType<T>
{
  /**
   * Technical entity name for SalesOrderItemBillingPlan.
   */
  static _entityName = 'A_SalesOrderItemBillingPlan';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
  /**
   * All key fields of the SalesOrderItemBillingPlan entity
   */
  static _keys = ['SalesOrder', 'SalesOrderItem', 'BillingPlan'];
  /**
   * Sales Order.
   * Maximum length: 10.
   */
  declare salesOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Order Item.
   * Maximum length: 6.
   */
  declare salesOrderItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing/Invoicing Plan Number.
   * Maximum length: 10.
   */
  declare billingPlan: DeserializedType<T, 'Edm.String'>;
  /**
   * Indicator for Billing Plan on Header.
   * @nullable
   */
  declare billingPlanIsInHeader?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Start Date of Billing/Invoicing Plan.
   * @nullable
   */
  declare billingPlanStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Rule for Origin of Start Date of Billing/Invoicing Plan.
   * Maximum length: 2.
   * @nullable
   */
  declare billingPlanStartDateRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Billing Plan Number / Invoicing Plan Number.
   * Maximum length: 10.
   * @nullable
   */
  declare referenceBillingPlan?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing plan category.
   * Maximum length: 1.
   * @nullable
   */
  declare billingPlanCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing/Invoicing Plan Type.
   * Maximum length: 2.
   * @nullable
   */
  declare billingPlanType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date of Billing/Invoicing Plan.
   * @nullable
   */
  declare billingPlanEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Rule for Origin of End Date for Billing/Invoicing Plan.
   * Maximum length: 2.
   * @nullable
   */
  declare billingPlanEndDateRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sort field.
   * Maximum length: 10.
   * @nullable
   */
  declare billingPlanSearchTerm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SlsOrderItemBillingPlanItem} entity.
   */
  declare toBillingPlanItem: SlsOrderItemBillingPlanItem<T>[];
  /**
   * One-to-one navigation property to the {@link SalesOrder} entity.
   */
  declare toSalesOrder?: SalesOrder<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrderItem} entity.
   */
  declare toSalesOrderItem?: SalesOrderItem<T> | null;

  constructor(_entityApi: SalesOrderItemBillingPlanApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderItemBillingPlanType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  salesOrderItem: DeserializedType<T, 'Edm.String'>;
  billingPlan: DeserializedType<T, 'Edm.String'>;
  billingPlanIsInHeader?: DeserializedType<T, 'Edm.Boolean'> | null;
  billingPlanStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  billingPlanStartDateRule?: DeserializedType<T, 'Edm.String'> | null;
  referenceBillingPlan?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanCategory?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanType?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  billingPlanEndDateRule?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanSearchTerm?: DeserializedType<T, 'Edm.String'> | null;
  toBillingPlanItem: SlsOrderItemBillingPlanItemType<T>[];
  toSalesOrder?: SalesOrderType<T> | null;
  toSalesOrderItem?: SalesOrderItemType<T> | null;
}
