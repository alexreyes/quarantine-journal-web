import { writable } from 'svelte/store';

export const storedWalletAddress = writable('wallet address');
export const storedWalletBalance = writable('wallet balance');
export const arweaveWallet = writable('wallet');
export const submittedPost = writable('false');
export const mapsLoaded = writable(false);
export const mapsLoading = writable(false);
