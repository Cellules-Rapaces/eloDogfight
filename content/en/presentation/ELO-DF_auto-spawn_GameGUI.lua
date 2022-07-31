--[[
================================================================================
ELO Dogfight Challenge - Auto Spawn player Script

Author : Frédéric "CoubyStark" Coubard

License : CC-BY-SA
https://creativecommons.org/licenses/by-sa/2.0/fr/deed.en
https://creativecommons.org/licenses/by-sa/2.0/fr/deed.fr

You are free to:
    Share — copy and redistribute the material in any medium or format
    Adapt — remix, transform, and build upon the material
    for any purpose, even commercially.

This license is acceptable for Free Cultural Works.
    The licensor cannot revoke these freedoms as long as you follow the license terms.

Under the following terms:
    Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
    ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.
    No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

Notices:
    You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation.
    No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you use the material.
================================================================================
--]]


local elodf_autoSpawn = {}


--------------------------------------------------------------------------------
-- When player recieve chat message from server admin (1)
--      Time to respawn => execute spawn_player
--      Welcome         => answer                / challenge to check autospawn script presence
-- Parameters : msg = chat message / from = ID of message emitter, 1 when server admin
-- Notes :  DCS World OpenBeta/API/DCS_ControlAPI.html
--
function elodf_autoSpawn.onChatMessage(msg, from)
  if msg == "*** Time to respawn ***" and from == 1 then
    net.spawn_player()
  end

  if msg == "*** Welcome ***" and from == 1 then
    local chatMessage = string.format("*** I'm in ***")
    net.send_chat_to(chatMessage, 1)
  end
end


-- =============================================================================
--   Runtime
-- =============================================================================

DCS.setUserCallbacks(elodf_autoSpawn)

net.log("Loaded - ELO Dogfight auto Spawn player v2 by CoubyStark")
