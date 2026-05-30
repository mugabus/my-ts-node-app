import { Request, Response } from "express";
import { addVote ,getAllVotes,getVoteCountForArt} from "../services/vote.service";


// CREATE VOTE
export function createArt(req: Request, res: Response) {

    const { userId, artworkId } = req.body;

    const vote = addVote(userId, artworkId);

    if (!vote) {
        return res.status(400).json({
            message: "You already voted for this artwork"
        });
    }

    return res.status(201).json({
        message: "Vote created successfully",
        vote
    });
}

// GET ALL VOTES
export function fetchVotes(req: Request, res: Response) {
    res.json(getAllVotes());
}

// GET VOTE COUNT FOR ONE ART
export function fetchVoteCount(req: Request, res: Response) {

    const artworkId = Number(req.params.artworkId);

    const count = getVoteCountForArt(artworkId);

    res.json({
        artworkId,
        votes: count
    });
}
