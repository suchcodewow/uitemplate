// Tiny lib to get user's initial dark/light setting

import { auth } from "@/lib/auth";
import { cache } from "react";

export default cache(auth);
