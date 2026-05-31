import { votes } from "../database/vote.storage";
import { Vote } from "../models/Vote";
import { canVote } from "./competition.service";

// Create a vote
export function addVote(    userId: number,artworkId: number): Vote | null {
    // Check if the user already voted for this artwork
    const alreadyVoted = votes.some(
        vote =>
            vote.userId === userId &&
            vote.artworkId === artworkId
    );

    if (alreadyVoted) {
        console.log("User has already voted for this artwork");
        return null;
    }
    if(!canVote(artworkId)){
        console.log("voting for this competition is cloded");
        return null;
    }
    const vote: Vote = {
        id: votes.length + 1,
        userId,
        artworkId,
        createAt:new Date
    };

    votes.push(vote);

    return vote;
}

// Get all votes
export function getAllVotes(): Vote[] {
    return votes;
}

// Get vote by ID
export function getVoteById(
    id: number
): Vote | undefined {

    return votes.find(
        vote => vote.id === id
    );
}

// Get all votes for an artwork
export function getVotesByArt(
    artworkId: number
): Vote[] {

    return votes.filter(
        vote => vote.artworkId === artworkId
    );
}

// Count votes for an artwork
export function getVoteCountForArt(
    artworkId: number
): number {

    return votes.filter(
        vote => vote.artworkId === artworkId
    ).length;
}

// Get all votes made by a user
export function getVotesByUser(
    userId: number
): Vote[] {

    return votes.filter(
        vote => vote.userId === userId
    );
}

// Delete a vote
export function deleteVote(
    id: number
): Vote | undefined {

    const index = votes.findIndex(
        vote => vote.id === id
    );

    if (index === -1) {
        console.log("Vote not found");
        return undefined;
    }

    const deletedVote = votes[index];

    votes.splice(index, 1);

    return deletedVote;
}