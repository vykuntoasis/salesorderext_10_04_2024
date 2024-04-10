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
import type { SalesOrderItmSubsqntProcFlowApi } from './SalesOrderItmSubsqntProcFlowApi';
import { SalesOrder, SalesOrderType } from './SalesOrder';
import { SalesOrderItem, SalesOrderItemType } from './SalesOrderItem';

/**
 * This class represents the entity "A_SalesOrderItmSubsqntProcFlow" of service "API_SALES_ORDER_SRV".
 */
export class SalesOrderItmSubsqntProcFlow<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderItmSubsqntProcFlowType<T>
{
  /**
   * Technical entity name for SalesOrderItmSubsqntProcFlow.
   */
  static _entityName = 'A_SalesOrderItmSubsqntProcFlow';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
  /**
   * All key fields of the SalesOrderItmSubsqntProcFlow entity
   */
  static _keys = ['SalesOrder', 'SalesOrderItem', 'DocRelationshipUUID'];
  /**
   * Preceding sales and distribution document.
   * Maximum length: 10.
   */
  declare salesOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Preceding Item of an SD Document.
   * Maximum length: 6.
   */
  declare salesOrderItem: DeserializedType<T, 'Edm.String'>;
  /**
   * SD Unique Document Relationship Identification.
   */
  declare docRelationshipUuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Subsequent Sales and Distribution Document.
   * Maximum length: 10.
   * @nullable
   */
  declare subsequentDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subsequent Item of an SD Document.
   * Maximum length: 6.
   * @nullable
   */
  declare subsequentDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Category of Subsequent Document.
   * Maximum length: 4.
   * @nullable
   */
  declare subsequentDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Level of the document flow record.
   * Maximum length: 2.
   * @nullable
   */
  declare processFlowLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Field Name.
   * Maximum length: 30.
   * @nullable
   */
  declare relatedProcFlowDocStsFieldName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Overall Processing Status (Item).
   * Maximum length: 1.
   * @nullable
   */
  declare sdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status for Transfer to Accounting.
   * Maximum length: 1.
   * @nullable
   */
  declare accountingTransferStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preliminary Billing Document Status.
   * Maximum length: 1.
   * @nullable
   */
  declare prelimBillingDocumentStatus?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Preceding sales and distribution document.
   * Maximum length: 10.
   * @nullable
   */
  declare subsqntDocItmPrecdgDocument?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Preceding Item of an SD Document.
   * Maximum length: 6.
   * @nullable
   */
  declare subsqntDocItmPrecdgDocItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Category of Preceding SD Document.
   * Maximum length: 4.
   * @nullable
   */
  declare subsqntDocItmPrecdgDocCategory?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Record Creation Date.
   * @nullable
   */
  declare creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Entry time.
   * @nullable
   */
  declare creationTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Last Changed On.
   * @nullable
   */
  declare lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrder} entity.
   */
  declare toSalesOrder?: SalesOrder<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrderItem} entity.
   */
  declare toSalesOrderItem?: SalesOrderItem<T> | null;

  constructor(_entityApi: SalesOrderItmSubsqntProcFlowApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderItmSubsqntProcFlowType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  salesOrderItem: DeserializedType<T, 'Edm.String'>;
  docRelationshipUuid: DeserializedType<T, 'Edm.Guid'>;
  subsequentDocument?: DeserializedType<T, 'Edm.String'> | null;
  subsequentDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  subsequentDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  processFlowLevel?: DeserializedType<T, 'Edm.String'> | null;
  relatedProcFlowDocStsFieldName?: DeserializedType<T, 'Edm.String'> | null;
  sdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
  accountingTransferStatus?: DeserializedType<T, 'Edm.String'> | null;
  prelimBillingDocumentStatus?: DeserializedType<T, 'Edm.String'> | null;
  subsqntDocItmPrecdgDocument?: DeserializedType<T, 'Edm.String'> | null;
  subsqntDocItmPrecdgDocItem?: DeserializedType<T, 'Edm.String'> | null;
  subsqntDocItmPrecdgDocCategory?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  creationTime?: DeserializedType<T, 'Edm.Time'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  toSalesOrder?: SalesOrderType<T> | null;
  toSalesOrderItem?: SalesOrderItemType<T> | null;
}
