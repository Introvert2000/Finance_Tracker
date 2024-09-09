import { Router } from "express"; // Importing Router from express
import { getTransaction, Withdrawal, Deposit,SortMerchant} from '../components/transaction'; // Use import instead of require
import { ByMerch, getT } from "../components/yearly";

const router = Router();

router.get("/data", getTransaction);
router.get("/withdrawal",Withdrawal)
router.get("/deposit",Deposit)
router.get("/sortMerchant",SortMerchant)
router.get("/getYearly",getT)
router.get("/Merch",ByMerch)
// Export the router using ES module export syntax
export default router;
