// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, Vec, u128, u32, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H256 } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportTokensMiscBalanceStatus, FrameSupportWeightsDispatchInfo, LocalRuntimeMassbitId, PalletBlockRewardDistributionConfig, PalletDapiProviderDeactivateReason, PalletDapiProviderType, SpFinalityGrandpaAppPublic, SpRuntimeDispatchError } from '@polkadot/types/lookup';

declare module '@polkadot/api-base/types/events' {
  export interface AugmentedEvents<ApiType extends ApiTypes> {
    balances: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
      /**
       * Some amount was deposited (e.g. for transaction fees).
       **/
      Deposit: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128, FrameSupportTokensMiscBalanceStatus]>;
      /**
       * Some amount was removed from the account (e.g. for misbehavior).
       **/
      Slashed: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees).
       **/
      Withdraw: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    blockReward: {
      /**
       * Distribution config has been updated.
       **/
      DistributionConfigChanged: AugmentedEvent<ApiType, [PalletBlockRewardDistributionConfig]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    dapi: {
      ChainIdAdded: AugmentedEvent<ApiType, [Bytes]>;
      ChainIdRemoved: AugmentedEvent<ApiType, [Bytes]>;
      ProjectDeposited: AugmentedEvent<ApiType, [LocalRuntimeMassbitId, u128]>;
      ProjectRegistered: AugmentedEvent<ApiType, [LocalRuntimeMassbitId, AccountId32, Bytes, u128]>;
      ProjectUsageUpdated: AugmentedEvent<ApiType, [LocalRuntimeMassbitId, u128]>;
      ProviderActivated: AugmentedEvent<ApiType, [LocalRuntimeMassbitId, PalletDapiProviderType]>;
      ProviderDeactivated: AugmentedEvent<ApiType, [LocalRuntimeMassbitId, PalletDapiProviderType, PalletDapiProviderDeactivateReason]>;
      ProviderRegistered: AugmentedEvent<ApiType, [LocalRuntimeMassbitId, PalletDapiProviderType, AccountId32, Bytes]>;
      RegulatorAdded: AugmentedEvent<ApiType, [AccountId32]>;
      RegulatorRemoved: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    dapiStaking: {
      /**
       * Set blocks per era
       **/
      BlocksPerEraSet: AugmentedEvent<ApiType, [u32, u32, u32, u32]>;
      /**
       * Delegator staked some funds on a provider.
       **/
      Delegated: AugmentedEvent<ApiType, [AccountId32, LocalRuntimeMassbitId, u128]>;
      /**
       * Delegator unstaked some funds on a provider.
       **/
      DelegatorUnstaked: AugmentedEvent<ApiType, [AccountId32, LocalRuntimeMassbitId, u128]>;
      /**
       * New staking era. Distribute era rewards to providers.
       **/
      NewEra: AugmentedEvent<ApiType, [u32, u32]>;
      /**
       * Payout to provider or delegator.
       **/
      Payout: AugmentedEvent<ApiType, [AccountId32, LocalRuntimeMassbitId, u32, u128]>;
      /**
       * Provider has decreased its bond.
       **/
      ProviderBondedLess: AugmentedEvent<ApiType, [LocalRuntimeMassbitId, u128]>;
      /**
       * Provider has increased its bond.
       **/
      ProviderBondedMore: AugmentedEvent<ApiType, [LocalRuntimeMassbitId, u128]>;
      /**
       * Account has withdrawn unbonded funds.
       **/
      Withdrawn: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    grandpa: {
      /**
       * New authority set has been applied.
       **/
      NewAuthorities: AugmentedEvent<ApiType, [Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>]>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    identity: {
      /**
       * A name was cleared, and the given balance returned.
       **/
      IdentityCleared: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * A name was removed and the given balance slashed.
       **/
      IdentityKilled: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * A name was set or reset (which will remove all judgements).
       **/
      IdentitySet: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A judgement was given by a registrar.
       **/
      JudgementGiven: AugmentedEvent<ApiType, [AccountId32, u32]>;
      /**
       * A judgement was asked from a registrar.
       **/
      JudgementRequested: AugmentedEvent<ApiType, [AccountId32, u32]>;
      /**
       * A judgement request was retracted.
       **/
      JudgementUnrequested: AugmentedEvent<ApiType, [AccountId32, u32]>;
      /**
       * A registrar was added.
       **/
      RegistrarAdded: AugmentedEvent<ApiType, [u32]>;
      /**
       * A sub-identity was added to an identity and the deposit paid.
       **/
      SubIdentityAdded: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * A sub-identity was removed from an identity and the deposit freed.
       **/
      SubIdentityRemoved: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * A sub-identity was cleared, and the given deposit repatriated from the
       * main identity account to the sub-identity account.
       **/
      SubIdentityRevoked: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the session index, not the
       * block number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied if one existed.
       **/
      KeyChanged: AugmentedEvent<ApiType, [Option<AccountId32>]>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed.
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [SpRuntimeDispatchError, FrameSupportWeightsDispatchInfo]>;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [FrameSupportWeightsDispatchInfo]>;
      /**
       * An account was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A new account was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * On on-chain remark happened.
       **/
      Remarked: AugmentedEvent<ApiType, [AccountId32, H256]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error.
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [u32, SpRuntimeDispatchError]>;
      /**
       * A call was dispatched.
       **/
      DispatchedAs: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
      /**
       * A single item within a Batch of dispatches has completed with no error.
       **/
      ItemCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    validatorSet: {
      CandidateAdded: AugmentedEvent<ApiType, [AccountId32, u128]>;
      CandidateRemoved: AugmentedEvent<ApiType, [AccountId32]>;
      CandidateSlashed: AugmentedEvent<ApiType, [AccountId32]>;
      NewCandidacyBond: AugmentedEvent<ApiType, [u128]>;
      NewDesiredCandidates: AugmentedEvent<ApiType, [u32]>;
      NewInvulnerables: AugmentedEvent<ApiType, [Vec<AccountId32>]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module
