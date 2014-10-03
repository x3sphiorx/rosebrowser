'use strict';

var LuaFunctions = function() {
};

LuaFunctions.prototype._lua = null;

LuaFunctions.prototype.init = function(lua) {
  this._lua = lua;
  this.GF_Init();
  this.QF_Init();
}

LuaFunctions.prototype.setFunc = function(name, func) {
  if (!func) {
    func = function() {
      console.error('LUA called unimplemented function `' + name + '`.');
      return [];
    };
  }

  lua_tableset(this._lua, name, func);
};

LuaFunctions.prototype.GF_Init = function() {
  this.setFunc('GF_ChangeState');
  this.setFunc('GF_DeleteEffectFromObject');
  this.setFunc('GF_EffectOnObject');
  this.setFunc('GF_GetEffectUseFile');
  this.setFunc('GF_GetEffectUseIndex');
  this.setFunc('GF_GetMotionUseFile');
  this.setFunc('GF_GetTarget');
  this.setFunc('GF_LogString');
  this.setFunc('GF_Random');
  this.setFunc('GF_SetMotion');
  this.setFunc('GF_WeatherEffectOnObject');
  this.setFunc('GF_addUserMoney');
  this.setFunc('GF_appraisal');
  this.setFunc('GF_checkNumOfInvItem');
  this.setFunc('GF_checkTownItem');
  this.setFunc('GF_checkUserMoney');
  this.setFunc('GF_disorganizeClan');
  this.setFunc('GF_error');
  this.setFunc('GF_getDate');
  this.setFunc('GF_getGameVersion');
  this.setFunc('GF_getIDXOfInvItem');
  this.setFunc('GF_getItemRate');
  this.setFunc('GF_getName', GF_getName);
  this.setFunc('GF_getReviveZoneName', GF_getReviveZoneName);
  this.setFunc('GF_getTownRate');
  this.setFunc('GF_getTownVar');
  this.setFunc('GF_getVariable', GF_getVariable);
  this.setFunc('GF_getWorldRate');
  this.setFunc('GF_getZone');
  this.setFunc('GF_giveEquipItemIntoInv');
  this.setFunc('GF_giveUsableItemIntoInv');
  this.setFunc('GF_log');
  this.setFunc('GF_movableXY');
  this.setFunc('GF_moveEvent');
  this.setFunc('GF_moveXY');
  this.setFunc('GF_openBank');
  this.setFunc('GF_openDeliveryStore');
  this.setFunc('GF_openSeparate');
  this.setFunc('GF_openStore');
  this.setFunc('GF_openUpgrade');
  this.setFunc('GF_organizeClan');
  this.setFunc('GF_playEffect');
  this.setFunc('GF_playSound');
  this.setFunc('GF_putoffItem');
  this.setFunc('GF_putonItem');
  this.setFunc('GF_repair');
  this.setFunc('GF_rotateCamera');
  this.setFunc('GF_setEquipedItem');
  this.setFunc('GF_setRevivePosition', GF_setRevivePosition);
  this.setFunc('GF_setTownRate');
  this.setFunc('GF_setVariable');
  this.setFunc('GF_setWorldRate');
  this.setFunc('GF_spawnMonAtEvent');
  this.setFunc('GF_spawnMonXY');
  this.setFunc('GF_takeItemFromInv');
  this.setFunc('GF_takeUserMoney');
  this.setFunc('GF_warp');
  this.setFunc('GF_zoomCamera');
}

LuaFunctions.prototype.QF_Init = function() {
  this.setFunc('QF_CameraworkingNpc');
  this.setFunc('QF_CameraworkingPoint');
  this.setFunc('QF_CameraworkingSelf');
  this.setFunc('QF_ChangetalkImage');
  this.setFunc('QF_ChangetalkName');
  this.setFunc('QF_EffectCallNpc');
  this.setFunc('QF_EffectCallSelf');
  this.setFunc('QF_MotionCallNpc');
  this.setFunc('QF_MotionCallSelf');
  this.setFunc('QF_NpcHide');
  this.setFunc('QF_NpcTalkinterfaceHide');
  this.setFunc('QF_NpcTalkinterfaceView');
  this.setFunc('QF_NpcView');
  this.setFunc('QF_appendQuest');
  this.setFunc('QF_beginCon');
  this.setFunc('QF_checkQuestCondition', QF_checkQuestCondition);
  this.setFunc('QF_closeCon');
  this.setFunc('QF_deleteQuest');
  this.setFunc('QF_doQuestTrigger', QF_doQuestTrigger);
  this.setFunc('QF_getClanVAR');
  this.setFunc('QF_getEpisodeVAR', QF_getEpisodeVAR);
  this.setFunc('QF_getJobVAR', QF_getJobVAR);
  this.setFunc('QF_getPlanetVAR', QF_getPlanetVAR);
  this.setFunc('QF_getUnionVAR', QF_getUnionVAR);
  this.setFunc('QF_getUserSwitch', QF_getUserSwitch);
  this.setFunc('QF_getQuestCount', QF_getQuestCount);
  this.setFunc('QF_findQuest', QF_findQuest);
  this.setFunc('QF_getQuestID', QF_getQuestID);
  this.setFunc('QF_getQuestItemQuantity', QF_getQuestItemQuantity);
  this.setFunc('QF_getQuestSwitch', QF_getQuestSwitch);
  this.setFunc('QF_getQuestVar', QF_getQuestVar);
  this.setFunc('QF_getEventOwner', QF_getEventOwner);
  this.setFunc('QF_getNpcQuestZeroVal');
  this.setFunc('QF_getSkillLevel');
  this.setFunc('QF_givePoint');
  this.setFunc('QF_gotoCon');
};

var luaFunctions = new LuaFunctions();
