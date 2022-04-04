// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api-base/types';
import type { Vec, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { Codec } from '@polkadot/types-codec/types';
import type { Perbill } from '@polkadot/types/interfaces/runtime';
import type {
  FrameSupportPalletId,
  FrameSupportWeightsRuntimeDbWeight,
  FrameSupportWeightsWeightToFeeCoefficient,
  FrameSystemLimitsBlockLength,
  FrameSystemLimitsBlockWeights,
  SpVersionRuntimeVersion,
} from '@polkadot/types/lookup';

declare module '@polkadot/api-base/types/consts' {
  export interface AugmentedConsts<ApiType extends ApiTypes> {
    balances: {
      /**
       * The minimum amount required to keep an account open.
       **/
      existentialDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum number of locks that should exist on an account.
       * Not strictly enforced, but used for weight estimation.
       **/
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of named reserves that can exist on an account.
       **/
      maxReserves: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    blockReward: {
      /**
       * The amount of issuance for each block.
       **/
      rewardAmount: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    dapiStaking: {
      /**
       * Number of blocks per era.
       **/
      blockPerEra: u32 & AugmentedConst<ApiType>;
      /**
       * Max number of unique `EraStake` values that can exist for a `(staker, provider)`
       * pairing. When stakers claims rewards, they will either keep the number of `EraStake`
       * values the same or they will reduce them by one. Stakers cannot add an additional
       * `EraStake` value by calling `stake` or `unstake` if they've reached the max number of
       * values.
       *
       * This ensures that history doesn't grow indefinitely - if there are too many chunks,
       * stakers should first claim their former rewards before adding additional `EraStake`
       * values.
       **/
      maxEraStakeValues: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of unique stakers per provider.
       **/
      maxNumberOfStakersPerProvider: u32 & AugmentedConst<ApiType>;
      /**
       * Max number of unlocking chunks per account Id <-> provider Id pairing.
       * If value is zero, unlocking becomes impossible.
       **/
      maxUnlockingChunks: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum amount that should be left on staker account after staking.
       **/
      minimumRemainingAmount: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum amount user must stake on provider.
       * User can stake less if they already have the minimum staking amount staked on that
       * particular provider.
       **/
      minimumStakingAmount: u128 & AugmentedConst<ApiType>;
      /**
       * Percentage of reward paid to operator.
       **/
      operatorRewardPercentage: Perbill & AugmentedConst<ApiType>;
      /**
       * Dapi staking pallet Id
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Minimum bonded deposit for new provider registration.
       **/
      registerDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Number of eras that need to pass until unstaked value can be withdrawn.
       * Current era is always counted as full era (regardless how much blocks are remaining).
       * When set to `0`, it's equal to having no unbonding period.
       **/
      unbondingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    grandpa: {
      /**
       * Max Authorities in use
       **/
      maxAuthorities: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    system: {
      /**
       * Maximum number of block number to block hash mappings to keep (oldest pruned first).
       **/
      blockHashCount: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a block (in bytes).
       **/
      blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
      /**
       * Block & extrinsics weights: base values and limits.
       **/
      blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: FrameSupportWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
      /**
       * The designated SS85 prefix of this chain.
       *
       * This replaces the "ss58Format" property declared in the chain spec. Reason is
       * that the runtime should know about the prefix in order to make use of it as
       * an identifier of the chain.
       **/
      ss58Prefix: u16 & AugmentedConst<ApiType>;
      /**
       * Get the chain's current version.
       **/
      version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    timestamp: {
      /**
       * The minimum period between blocks. Beware that this is different to the *expected*
       * period that the block production apparatus provides. Your chosen consensus system will
       * generally work with this to determine a sensible block time. e.g. For Aura, it will be
       * double this period on default settings.
       **/
      minimumPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    transactionPayment: {
      /**
       * A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
       * `priority`
       *
       * This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
       * added to a tip component in regular `priority` calculations.
       * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
       * extrinsic (with no tip), by including a tip value greater than the virtual tip.
       *
       * ```rust,ignore
       * // For `Normal`
       * let priority = priority_calc(tip);
       *
       * // For `Operational`
       * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
       * let priority = priority_calc(tip + virtual_tip);
       * ```
       *
       * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
       * sent with the transaction. So, not only does the transaction get a priority bump based
       * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
       * transactions.
       **/
      operationalFeeMultiplier: u8 & AugmentedConst<ApiType>;
      /**
       * The fee to be paid for making a transaction; the per-byte portion.
       **/
      transactionByteFee: u128 & AugmentedConst<ApiType>;
      /**
       * The polynomial that is applied in order to derive fee from weight.
       **/
      weightToFee: Vec<FrameSupportWeightsWeightToFeeCoefficient> &
        AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    utility: {
      /**
       * The limit on the number of batched calls.
       **/
      batchedCallsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
  } // AugmentedConsts
} // declare module
